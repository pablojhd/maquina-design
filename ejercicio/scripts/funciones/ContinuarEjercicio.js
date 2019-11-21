import { tipo } from './Variables'

export const continuarEjercicio = () => {
  document.getElementById('btnContinuar').onclick = () => false
  document.querySelector('.feedback').style.display = 'none'
  document.querySelector('.feedback span').innerHTML = ''
  document.querySelector('.feedback p').innerHTML = ''
  document.querySelector('.feedback img').setAttribute('src', '')
  document.querySelector('.feedback').classList.remove('feedback-incorrecto')
  document.querySelector('footer').style.display = 'grid'
  document.getElementsByName('answer').forEach(input => {
    input.disabled = false
  })
  if (tipo === 'seleccion multiple') {
    document.querySelector('input[type=radio]:checked').checked = false
  } else {
    document.querySelectorAll('input[type=text]').forEach(input => {
      input.value = ''
    })
  }
}
