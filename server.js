const path = require('path')
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const port = process.env.PORT || 4000

const app = express()
const publicPath = path.join(__dirname, 'public')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(publicPath))

app.get('/', (request, response) => {
  response.sendFile(path.join(publicPath, 'iframe.html'))
})

app.get('/prueba', (request, response) => {
  response.sendFile(path.join(publicPath, 'test.html'))
})

app.get('/archivos', (request, response) => {
  let archivos = []
  const ejerciciosPath = path.join(publicPath, 'EJERCICIOS')
  const nivelesCarpeta = fs.readdirSync(ejerciciosPath)
  for(let nivel of nivelesCarpeta) {
    const ejesPath = path.join(ejerciciosPath, nivel)
    if(ejesPath.indexOf('.DS_Store') > 0) {
      continue
    }
    const ejesCarpeta = fs.readdirSync(ejesPath).filter(x => x.startsWith('Eje-'))
    for(let eje of ejesCarpeta) {
      const oasPath = path.join(ejesPath, eje)
      if(oasPath.indexOf('.DS_Store') > 0) {
        continue
      }
      const oasCarpeta = fs.readdirSync(oasPath)
      for(let oa of oasCarpeta) {
        const iesPath = path.join(oasPath, oa)
        if(iesPath.indexOf('.DS_Store') > 0) {
          continue
        }
        const iesCarpeta = fs.readdirSync(iesPath)
        for(let ie of iesCarpeta) {
          const ejerciciosPath = path.join(iesPath, ie)
          if(ejerciciosPath.indexOf('.DS_Store') > 0) {
            continue
          }
          const ejerciciosCarpeta = fs.readdirSync(ejerciciosPath)
          for(let ejercicio of ejerciciosCarpeta) {
            const versionesPath = path.join(ejerciciosPath, ejercicio)
            if(versionesPath.indexOf('.DS_Store') > 0) {
              continue
            }
            const versionesHtml = fs.readdirSync(versionesPath).filter(x => x.endsWith('.html')).map(x => [
              nivel,
              eje,
              oa,
              ie,
              ejercicio,
              path.join(versionesPath, x).replace(publicPath, '').replace(/\\/g, '/')
            ])
            archivos = archivos.concat(versionesHtml)
          }
        }
      }
    }
  }
  response.send({
    draw: 1,
    recordsTotal: archivos.length,
    recordsFiltered: archivos.length,
    data: archivos
  })
})

app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
