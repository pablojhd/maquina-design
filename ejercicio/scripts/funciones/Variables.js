import ReemplazaVariables from '../utils/ReemplazaVariables'
import ReemplazaFunciones from '../utils/ReemplazaFunciones'

export const idEjercicio = document.body.dataset.id

export const version = JSON.parse(
	document.body.dataset.version.replace(/'/g, '"')
)

export const validaciones = JSON.parse(
	ReemplazaFunciones(ReemplazaVariables(Buffer(document.body.dataset.x, 'base64').toString('utf8'), version.vars, false))
)

export const tipo = document.body.dataset.tipoejercicio

export let numeroIntento = 1

export const siguienteIntento = () => {
  numeroIntento++
}

export let srcImgRespuestaCorrecta, srcImgRespuestaIncorrecta, srcImgGlosa

switch(idEjercicio.substr(2,2)) {
	case '00':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/patos/Correct_feedback_PATO_nino.svg',
			'../../../../imagenes_front/patos/Correct_feedback_PATO_nina.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/patos/Mistake_feedback_PATO_nino.svg',
			'../../../../imagenes_front/patos/Mistake_feedback_PATO_nina.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/patos/Pato_nina_glosa.svg',
			'../../../../imagenes_front/patos/Pato_nino_glosa.svg'
		]
		break
	case '01':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/patos/Correct_feedback_PATO_nino.svg',
			'../../../../imagenes_front/patos/Correct_feedback_PATO_nina.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/patos/Mistake_feedback_PATO_nino.svg',
			'../../../../imagenes_front/patos/Mistake_feedback_PATO_nina.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/patos/Pato_nina_glosa.svg',
			'../../../../imagenes_front/patos/Pato_nino_glosa.svg'
		]
		break
	case '02':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/pumas/Correct_feedback_PUMA_nino.svg',
			'../../../../imagenes_front/pumas/Correct_feedback_PUMA_nina.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/pumas/Mistake_feedback_PUMA_nino.svg',
			'../../../../imagenes_front/pumas/Mistake_feedback_PUMA_nina.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/pumas/Puma_nina_glosa.svg',
			'../../../../imagenes_front/pumas/Puma_nino_glosa.svg'
		]
		break
	case '03':
		break
	case '04':
		break
	case '05':
		break
}

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
