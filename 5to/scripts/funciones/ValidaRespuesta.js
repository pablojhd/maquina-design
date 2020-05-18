import FormateaNumeros from '../utils/FormateaNumeros'
import ValidaNumeroEscrito from '../utils/ValidaNumeroEscrito'
import { version } from './Variables'
import ReemplazaVariables from '../utils/ReemplazaVariables'

export const validaRespuesta = (validaciones, tipo) => {
	let feedback, errorFrecuente
	if(tipo === 'seleccion multiple') {
        let respuesta = document.querySelector('input[type=radio]:checked').value
		for(let validacion of validaciones) {
			if(respuesta == validacion.opcion) {
				feedback = validacion.feedback
				errorFrecuente = validacion.errorFrecuente
				break
			}
		}
		return { feedback, errorFrecuente }
	} else if (tipo === 'respuesta breve') {
		const { respuestas, errFrecDefecto, feedbackDefecto } = validaciones
		for (let respuesta of respuestas) {
			let coincidenTodas = true
			respuesta.validaciones.forEach(function(val, index) {
				let input = document.getElementById(val.inputId);
				let tipoInput = input.getAttribute('data-tipoinput')
				switch (tipoInput) {
					case 'numero':
						if (input.value.replace(/\s/g, '') !== val.valor && val.valor !== '-any-') {
							coincidenTodas = false
                        }
                        break
                    case 'decimal':
                        if (input.value.replace(/\s/g, '').replace(',','.') !== val.valor && val.valor !== '-any-') {
                            coincidenTodas = false
                        }
                        break
                    case 'texto-numerico':
                        let numberArr = String(val.valor).padStart(4, '0').split('')
                        if (!(ValidaNumeroEscrito(input.value.trim(), numberArr)) && val.valor !== '-any-') {
                            coincidenTodas = false
                        }
                        break
                    case 'texto':
                        if(String(input.value).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
                            !== String(val.valor).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
                            && val.valor !== '-any-') 
                        {
                            coincidenTodas = false
                        }
                        break
                    case 'alfanumerico':
                        if(String(input.value).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
                            !== String(val.valor).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
                            && val.valor !== '-any-') 
                        {
                            coincidenTodas = false
                        }
                        break
                    case 'comparacion':
                        if(input.value !== val.valor && val.valor !== '-any-') {
                            coincidenTodas = false
                        }
                        break
				}
            })
			if (coincidenTodas) {
				feedback = FormateaNumeros(respuesta.feedback, '&nbsp;')
				errorFrecuente = respuesta.errFrec
				if (errorFrecuente !== null) {
					coloreaInputsTextoPorCoincidencia(respuesta) //colorear input
				} else {
					document.querySelectorAll("input[name='answer']").forEach(input => {
                        input.classList.add('inputTexto-correcto')
                    })
				}
				break;
			}
		}
		if (!feedback) {
			feedback = FormateaNumeros(feedbackDefecto, '&nbsp;')
			errorFrecuente = errFrecDefecto
			var inputs = document.querySelectorAll("input[name='answer']");
			for (var input of inputs) {
			    coloreaInputTextoPorDefecto(input);
			}
		}
		return { feedback, errorFrecuente }
	} else {
        const { respuestas, errFrecDefecto, feedbackDefecto } = validaciones
        for(let resp of respuestas) {
            let evaluacion = resp.opcion.replace(/input\d/g, coincidencia => document.getElementById(coincidencia).value.replace(',', '.').replace(/\s/, ''))
            if(eval(evaluacion)) {
                feedback = resp.feedback
				errorFrecuente = resp.errorFrecuente
				break
            }
        }
        if(!feedback) {
            feedback = FormateaNumeros(feedbackDefecto, '&nbsp;')
            errorFrecuente = errFrecDefecto
            document.querySelectorAll("input[name='answer']").forEach(input => {
                input.classList.add('inputTexto-incorrecto')
            })
        } else {
            document.querySelectorAll("input[name='answer']").forEach(input => {
                input.classList.add('inputTexto-correcto')
            })
        }
        return { feedback, errorFrecuente }
    }
}

function coloreaInputTextoPorDefecto(inputElement) {
    let tipoInput = inputElement.getAttribute('data-tipoinput')
    let correctas = Buffer.from(inputElement.getAttribute('data-content'), 'base64').toString('utf-8')
    correctas = ReemplazaVariables(correctas, version.vars, false)
    let match = false, resp;
    switch (tipoInput) {
        case 'numero':
            resp = inputElement.value.replace(/\s/g, '')
            correctas.split(',').forEach(function(correcta) {
                if (resp === correcta) {
                    inputElement.classList.add('inputTexto-correcto');
                    match = true;
                }
            })
            break
        case 'decimal':
            resp = inputElement.value.replace(/\s/g, '').replace(',', '.')
            correctas.split(',').forEach(function(correcta) {
                if (resp === correcta) {
                    inputElement.classList.add('inputTexto-correcto');
                    match = true;
                }
            })
            break
        case 'texto-numerico':
            resp = inputElement.value
            correctas.split(',').forEach(function(correcta) {
                let numberArr = correcta.length === 3 ? ('0' + correcta).split('') : correcta.split('')
                if (ValidaNumeroEscrito(resp, numberArr)) {
                    inputElement.classList.add('inputTexto-correcto')
                    match = true
                }
            })
            break
        case 'texto':
            resp = inputElement.value
            correctas.split(',').forEach(function(correcta) {
                if(String(resp).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
                    === String(correcta).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                {
                    inputElement.classList.add('inputTexto-correcto')
                    match = true
                }
            })
            break
        case 'alfanumerico':
            resp = inputElement.value
            correctas.split(',').forEach(function(correcta) {
                if(String(resp).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") 
                    === String(correcta).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) 
                {
                    inputElement.classList.add('inputTexto-correcto')
                    match = true
                }
            })
            break
    }
    if (!match) {
        inputElement.classList.add('inputTexto-incorrecto')
    }
}

function coloreaInputsTextoPorCoincidencia(coincidencia) { // colorea inputs de acuerdo a 
    let { validaciones } = coincidencia
    validaciones.forEach(function(val) {
        let { color, inputId } = val
        var input = document.getElementById(inputId)
        if (color === 'ok') {
            input.classList.add('inputTexto-correcto')
        } else if (color === 'bad') {
            input.classList.add('inputTexto-incorrecto')
        } else {
            if (input.value.replace(/\s/g, '') == color.correcta) {
                input.classList.add('inputTexto-correcto')
            } else {
                input.classList.add('inputTexto-incorrecto')
            }
        }
    })
}