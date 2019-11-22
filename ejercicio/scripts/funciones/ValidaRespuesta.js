import FormateaNumeros from '../utils/FormateaNumeros'
import ValidaNumeroEscrito from '../utils/ValidaNumeroEscrito'

export const validaRespuesta = (validaciones, tipo) => {
	let feedback, errorFrecuente, respuesta
	if(tipo === 'seleccion multiple') {
		respuesta = document.querySelector('input[type=radio]:checked').value
		for(let validacion of validaciones) {
			if(respuesta === validacion.opcion) {
				feedback = validacion.feedback
				errorFrecuente = validacion.errorFrecuente
				break
			}
		}
		return { respuesta, feedback, errorFrecuente }
	} else {
		const { respuestas, errFrecDefecto, feedbackDefecto } = validaciones
		respuesta=''
		document.querySelectorAll('input[type=text]').forEach(input => {
			respuesta += input.id + ':' + input.value + ';'
		})
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
                    case 'texto-numerico':
                        let numberArr = val.valor.length === 3 ? ('0' + val.valor).split('') : val.valor.split('');
                        if (!ValidaNumeroEscrito(input.value.trim(), numberArr)) {
                            coincidenTodas = false
                            break;
                        }
						break
				}
			})
			if (coincidenTodas) {
				feedback = respuesta.feedback
				errorFrecuente = respuesta.errFrec
				if (errorFrecuente !== null) {
					//coloreaInputsTextoPorCoincidencia(respuestas[i]) //colorear input
				} else {
					//$(".contenido input[name='answer']").addClass('inputTexto-correcto')
				}
				break;
			}
		}
		if (!feedback) {
			feedback = FormateaNumeros(feedbackDefecto)
			errorFrecuente = errFrecDefecto
			//var inputs = document.querySelectorAll(".contenido input[name='answer']");
			//for (var input of inputs) {
			//	//coloreaInputTextoPorDefecto(input);
			//}
		}
		return { respuesta, feedback, errorFrecuente }
	}
}

/*function evaluaInputTexto(inputElement) {
    var content = JSON.parse(b64_to_utf8(inputElement.getAttribute('data-content')));
    var match = false;
    switch (content.tipoInput) {
        case 'numero':
            var resp = inputElement.value.replace(/\s/g, '');
            for (var answer of content.answers) {
                if (resp === answer.respuesta) {
                    feed = answer.feedback;
                    errFre = answer.errFrec;
                    match = true;
                    break;
                }
            }
            break;
        case 'texto':
            var resp = inputElement.value
            for (var answer of content.answers) {
                if (String(resp).trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "") === String(answer.respuesta).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")) {
                    feed = answer.feedback;
                    errFre = answer.errFrec;
                    match = true;
                    break;
                }
            }
            break
        case 'texto-numerico':
            var resp = inputElement.value;
            for (var answer of content.answers) {
                var numberArr = answer.respuesta.length === 3 ? ('0' + answer.respuesta).split('') : answer.respuesta.split('');
                if (checkWord(resp, numberArr)) {
                    feed = answer.feedback;
                    errFre = answer.errFrec;
                    match = true;
                    break;
                }
            }
            break
    }
    if (!match) {
        feed = content.feedbackDefecto;
        errFre = content.errFrecDefecto;
    }
}*/

function coloreaInputTextoPorDefecto(inputElement) {
    var content = JSON.parse(inputElement.getAttribute('data-content'));
    var match = false;
    switch (content.tipoInput) {
        case 'numero':
            var resp = inputElement.value.replace(/\s/g, '');
            b64_to_utf8(content.correctas).split(',').forEach(function(correcta) {
                if (resp === correcta) {
                    inputElement.classList.add('inputTexto-correcto');
                    match = true;
                }
            })
            break;
        case 'texto':
            var resp = inputElement.value;
            b64_to_utf8(content.correctas).split(',').forEach(function(correcta) {
                var numberArr = correcta.length === 3 ? ('0' + answer.respuesta).split('') : answer.respuesta.split('');
                if (checkWord(resp, numberArr)) {
                    inputElement.classList.add('inputTexto-correcto');
                }
            });
    }
    if (!match) {
        inputElement.classList.add('inputTexto-incorrecto');
    }
}

function evaluaInputsEjercicio() {
    let { respuestas, errFrecDefecto, feedbackDefecto } = _VALIDACIONES_INPUT_TABLA_;
    for (let i = 0; i < respuestas.length; i++) {
        let { validaciones, errFrec, feedback } = respuestas[i], coincidenTodas = true;
        validaciones.forEach(function(val, index) {
            let input = document.getElementById(val.inputId);
            let content = JSON.parse(input.getAttribute('data-content'))
            switch (content.tipoInput) {
                case 'numero':
                    if (input.value.replace(/\s/g, '') !== val.valor && val.valor !== '-any-') {
                        coincidenTodas = false;
                    }
                    break;
                case 'texto':
                    var numberArr = correcta.length === 3 ? ('0' + val.valor).split('') : val.valor.split('');
                    if (!checkWord(input.value, numberArr) && val.valor !== '-any-') {
                        coincidenTodas = false
                    }
            }
        })
        if (coincidenTodas) {
            feed = feedback;
            errFre = errFrec;
            if (errFre !== null) {
                coloreaInputsTextoPorCoincidencia(respuestas[i]) //colorear input
            } else {
                $(".contenido input[name='answer']").addClass('inputTexto-correcto')
            }
            break;
        }
    }
    if (errFre === '') {
        feed = regexFunctions(feedbackDefecto);
        errFre = errFrecDefecto;
        var inputs = document.querySelectorAll(".contenido input[name='answer']");
        for (var input of inputs) {
            coloreaInputTextoPorDefecto(input);
        }
    }
}

function coloreaInputsTextoPorCoincidencia(coincidencia) { // colorea inputs de acuerdo a 
    let { validaciones, errFrec, feedback } = coincidencia
    validaciones.forEach(function(val, index) {
        var { color, inputId } = val
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