export const idEjercicio = document.body.dataset.id

export const version = document.body.dataset.version

export const validaciones = JSON.parse(
  Buffer(document.body.dataset.validation, 'base64').toString('utf8')
)

export const tipo = document.body.dataset.type

export let numeroIntento = 1

export const siguienteIntento = () => {
  numeroIntento++
}

export const srcImgRespuestaCorrecta = [
  '../../../../imagenes_front/pumas/Correct_feedback_PUMA_nino.svg',
  '../../../../imagenes_front/pumas/Correct_feedback_PUMA_nina.svg'
]

export const srcImgRespuestaIncorrecta = [
  '../../../../imagenes_front/pumas/Mistake_feedback_PUMA_nino.svg',
  '../../../../imagenes_front/pumas/Mistake_feedback_PUMA_nina.svg'
]

export let tmpProgreso, tmpTotal
let hiddenBarraDatos = window.parent.parent.barraProgreso
if(hiddenBarraDatos) {
	let datosBarraDeProgreso = JSON.parse(hiddenBarraDatos.value)
	tmpProgreso = datosBarraDeProgreso.tmpProgreso ? 
		datosBarraDeProgreso.tmpProgreso : []
	tmpTotal = datosBarraDeProgreso.tmpTotal ?
		Number(datosBarraDeProgreso.tmpTotal) : 0
} else {
	tmpProgreso = localStorage.getItem('tmpProgreso') ? 
		JSON.parse(localStorage.getItem('tmpProgreso')) : []
	tmpTotal = localStorage.getItem('tmpTotal') ?
		Number(localStorage.getItem('tmpTotal')) : 0
}
