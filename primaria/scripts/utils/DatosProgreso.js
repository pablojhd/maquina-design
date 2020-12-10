export default () => {
    let hiddenBarraDatos = window.parent.parent.barraProgreso
    if(hiddenBarraDatos) {
        let datosBarraDeProgreso = JSON.parse(hiddenBarraDatos.value)
        let tmpProgreso = datosBarraDeProgreso.tmpProgreso ? 
            datosBarraDeProgreso.tmpProgreso : []
        let tmpTotal = datosBarraDeProgreso.tmpTotal ?
            Number(datosBarraDeProgreso.tmpTotal) : 0
        return { tmpProgreso, tmpTotal }
    } else {
        let tmpProgreso = localStorage.getItem('tmpProgreso') ? 
            JSON.parse(localStorage.getItem('tmpProgreso')) : []
        let tmpTotal = localStorage.getItem('tmpTotal') ?
            Number(localStorage.getItem('tmpTotal')) : 0
        return { tmpProgreso, tmpTotal }
    }
}