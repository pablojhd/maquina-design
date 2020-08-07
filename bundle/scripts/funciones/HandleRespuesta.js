import validaRespuesta from './ValidaRespuesta'
import continuarEjercicio from './ContinuarEjercicio'
import { enviar, cerrarFeedGlosa, cerrarFeed } from './ConexionPlataforma'
import zoom from './Zoom'

export default (event, datos) => {
	event.target.disabled = true
	let { idEjercicio, validaciones, tipoEjercicio, tmpProgreso } = datos

	document.querySelector('footer').style.display = 'none'

	document.getElementsByName('answer').forEach(input => {
		input.disabled = true
	})

	let { feedback, errorFrecuente } = validaRespuesta(validaciones, tipoEjercicio)
	
	let feedbackElement, feedbackSpan, feedbackText
	if(errorFrecuente) {
		feedbackElement = document.querySelector('.feedback-incorrecto')
		feedbackSpan = document.querySelector('.feedback-incorrecto span.feedback-span')
		feedbackText = document.querySelector('.feedback-incorrecto p.feedback-p') 
	} else {
		feedbackElement = document.querySelector('.feedback-correcto')
		feedbackSpan = document.querySelector('.feedback-correcto span.feedback-span')
		feedbackText = document.querySelector('.feedback-correcto p.feedback-p') 
	}

	if (!errorFrecuente) {
		//respuesta correcta
		feedbackElement.style.display = 'block'

		feedbackSpan.innerHTML = feedPositivos[Math.floor(Math.random()*4)]
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
			feedbackSpan.innerHTML = feedNegativos[Math.floor(Math.random()*10)]
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

const feedPositivos = [
	'¡Bien hecho! Ahora nuevos desafíos.',
	'¡Me sorprende tu estrategia!',
	'Tu estrategia está dando frutos.',
	'Tu esfuerzo no ha sido en vano.'
]

const feedNegativos = [
	'De los errores se aprende para alcanzar maestría.',
	'Momento de revisar tu estrategia.',
	'El error es parte de la práctica.',
	'Aquí una pista.',
	'Inténtalo una vez más.',
	'Vuelve a intentarlo.',
	'Perseverar es perfeccionar.',
	'Necesitas idear otra estrategia.',
	'Te enseñamos una nueva estrategia',
	'Hoy aprenderás algo nuevo.'
]