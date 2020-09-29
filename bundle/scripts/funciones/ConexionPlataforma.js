let fechaEntrada = (new Date()).toLocaleTimeString()
var hiddenParent = window.parent.parent.varHidden //Comunicacón con frame para resolver ejercicio
var hiddenTutorial = window.parent.parent.varTutorial //Comunicacón con frame por video tutorial
var hiddenSegundoError = window.parent.parent.varSegundoError //Comunicacón con frame Segundo error
var hiddenCierraFeed = window.parent.parent.cerrarFeedbackHijo //Comunicacón con frame Segundo error
var hiddenPressConsulta = window.parent.parent.pressConsulta //Comunicacón con frame Segundo error
var hiddenPressCerrar = window.parent.parent.pressCerrar

Date.prototype.yyyymmdd = function () {
    let mm = this.getMonth() + 1 // getMonth() is zero-based
    let dd = this.getDate()

    return [
        this.getFullYear(),
        (mm > 9 ? '' : '0') + mm,
        (dd > 9 ? '' : '0') + dd
    ].join('-')
}

export const enviar = datos => {
    const { idEjercicio, tipoejercicio, errorFrecuente } = datos
    let fechaTerminoIntento = new Date()
    let versionEjercicio = window.location.href.substring(window.location.href.search(idEjercicio) + (idEjercicio.length + 1), window.location.href.search('.html'))
    let date = new Date()

    /*---captura valores de los elementos-----*/
    let values = '';
    if (tipoejercicio === 'radio') {
        values = 'Valor radio= ' + document.querySelector('input[name=answer]:checked').value
    } else {
        let inputs = document.querySelectorAll('.contenido input[name=answer]')
        for (let input of inputs) {
            values += input.id + ' = '+ input.value + ' ';
        }
    }
    console.log({ errorFrecuente })
    /*---------------------------------------*/
    let envioIntento = JSON.stringify({
        'idejercicioversion': versionEjercicio,
        'correcto': errorFrecuente ? 0 : 1,
        'estarea': 0,
        'idtareaiematricula': 0,
        'tiempoInicio': '' + date.yyyymmdd() + ' ' + fechaEntrada + '',
        'tiempoRespuesta': '' + date.yyyymmdd() + ' ' + fechaTerminoIntento.toLocaleTimeString() + '',
        'feedback': errorFrecuente ? '' : 'Respuesta Correcta',
        'codigoErrorComun': errorFrecuente ? errorFrecuente : 0,
        'respuesta': values,
        'glosa': numeroIntento == 2 ? true : false
    })
    /*----Comunicacion de frame a página padre----*/
    dispatchEvent(hiddenParent, envioIntento)
    /*--------------------------------------------*/
    window.numeroIntento++;
}

export const cerrarFeed = () => {//siguiente ejerccio respuesta correctas
    dispatchEvent(hiddenCierraFeed, true)
    //$(hiddenCierraFeed).val(true).trigger('change');
    //$(hiddenCierraFeed).val(true).trigger('click');
}

export const pressConsulta = () => {
    dispatchEvent(hiddenPressConsulta, '1')
    //$(hiddenPressConsulta).val('1').trigger('change');
    //$(hiddenPressConsulta).val('1').trigger('click');
}

export const pressCerrar = () => {
    dispatchEvent(hiddenPressCerrar, '1')
}

export const cerrarFeedGlosa = () => {//siguiente ejercicio respuesta incorrecta por segunda vez
    dispatchEvent(hiddenSegundoError, true)
    //$(hiddenSegundoError).val(true).trigger('change');
    //$(hiddenSegundoError).val(true).trigger('click');
}

export const sgteGlosa = () => {
    hiddenTutorial.value = true
    let changeEvent = document.createEvent('Event')
    changeEvent.initEvent('change', true, true)
    hiddenTutorial.dispatchEvent(changeEvent)
}


const dispatchEvent = (element, value) => {
    try {
        element.value = value
    
        let changeEvent = document.createEvent('Event')// Create the event.
        changeEvent.initEvent('change', true, true)// Define that the event name is 'change'.
        element.dispatchEvent(changeEvent)// Target can be any Element or other EventTarget.
    
        let clickEvent = document.createEvent('Event')
        clickEvent.initEvent('click', true, true)
        element.dispatchEvent(clickEvent)
    } catch(error) {
        console.log(error)
    }
    
} 