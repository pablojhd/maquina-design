import validaRespuesta from './ValidaRespuesta'
import continuarEjercicio from './ContinuarEjercicio'
import { enviar, cerrarFeedGlosa, cerrarFeed } from './ConexionPlataforma'
import zoom from './Zoom'

export default (event, datos) => {
	document.querySelector('#btnResponder').disabled = true
	let { idEjercicio, validaciones, tipoEjercicio, tmpProgreso } = datos

	document.querySelector('footer').style.display = 'none'

	document.getElementsByName('answer').forEach(input => {
		input.disabled = true
	})

	let { feedback, errorFrecuente } = validaRespuesta(validaciones, tipoEjercicio)
	
	let feedbackElement, feedbackText
	if(errorFrecuente) {
		feedbackElement = document.querySelector('.feedback-incorrecto')
		feedbackText = document.querySelector('.feedback-incorrecto p.feedback-p') 
	} else {
		feedbackElement = document.querySelector('.feedback-correcto')
		feedbackText = document.querySelector('.feedback-correcto p.feedback-p') 
	}

	if (!errorFrecuente) {
		//respuesta correcta
		feedbackElement.style.display = 'block'
		let racha = rachaCorrectas(tmpProgreso)
		if (racha) {
			feedbackText.innerHTML = `Tienes una racha de <b>${racha}</b> respuestas correctas.`
		}
		if(window.numeroIntento === 2) {
			feedbackElement.querySelector('button').removeEventListener('click', () => continuarEjercicio(tipoEjercicio, feedbackElement))//si es que es el segundo intento
		}
		feedbackElement.querySelector('button').addEventListener('click', cerrarFeed)
	} else {
		//respuesta incorrecta
		if (window.numeroIntento === 1) {
			feedbackText.innerHTML = feedback
			feedbackElement.querySelector('button').addEventListener('click', () => continuarEjercicio(tipoEjercicio, feedbackElement))
			if(window.renderMathInElement) { //la funcion forma parte de la libreria katex para dibujar ecuaciones 
				window.renderMathInElement(feedbackElement, {
					delimiters: [ 
						{ left: '((', right: '))', display: false },
						{ left: '[[', right: ']]', display: true }
					] 
				})
			}
			feedbackElement.style.display = 'block'
		} else {
			document.querySelector('#btnCerrarGlosa').addEventListener('click', cerrarFeedGlosa)
			document.getElementById('glosa').style.display = 'block'
			zoom('#glosa')
		}
	}
	enviar({ idEjercicio, tipoEjercicio, errorFrecuente })
}

const rachaCorrectas = tmpProgreso => {
	var correctos = 0
	for (var i = tmpProgreso.length - 1; i > -1; i--) {
		if (tmpProgreso[i].correcto) {
			correctos++
		} else {
			break
		}
	}
	return correctos + 1 > 1 ? correctos + 1 : null
}