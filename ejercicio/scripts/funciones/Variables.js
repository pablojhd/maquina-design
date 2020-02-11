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

export let numeroIntento = parseInt(document.getElementById('hiddenIntento').value) || 1

export const siguienteIntento = () => {
  numeroIntento++
}

document.getElementById('hiddenIntento').addEventListener('change', function(event){
	numeroIntento = parseInt(event.target.value)
	/*document.getElementById('hiddenIntento').dispatchEvent(new Event('change'))*/
})

export let srcImgRespuestaCorrecta, srcImgRespuestaIncorrecta, srcImgGlosa

switch(idEjercicio.substr(2,2)) {
	case '00':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_CorrectFeedback_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_CorrectFeedback_Pato.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_MistakeFeedback_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_MistakeFeedback_Pato.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_Glosa_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_Glosa_Pato.svg'
		]
		break
	case '01':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_CorrectFeedback_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_CorrectFeedback_Pato.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_MistakeFeedback_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_MistakeFeedback_Pato.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_Glosa_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_Glosa_Pato.svg'
		]
		break
	case '02':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_CorrectFeedback_Alce.svg',
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_CorrectFeedback_Zorro.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_MistakeFeedback_Alce.svg',
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_MistakeFeedback_Zorro.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_Glosa_Zorro.svg',
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_Glosa_Alce.svg'
		]
		break
	case '03':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_CorrectFeedback_Mandril.svg',
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_CorrectFeedback_Tigre.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_MistakeFeedback_Mandril.svg',
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_MistakeFeedback_Tigre.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_Glosa_Mandril.svg',
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_Glosa_Tigre.svg'
		]
		break
	case '04':
		srcImgRespuestaCorrecta = [
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_CorrectFeedback_OsoPanda.svg',
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_CorrectFeedback_PandaRojo.svg'
		]
		srcImgRespuestaIncorrecta = [
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_MistakeFeedback_OsoPanda.svg',
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_MistakeFeedback_PandaRojo.svg'
		]
		srcImgGlosa = [
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_Glosa_OsoPanda.svg',
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_Glosa_PandaRojo.svg'
		]
		break
	case '05':
		srcImgRespuestaCorrecta = [
			`../../../../imagenes_front/Mascotas_Eje5/Eje5_CorrectFeedback_Camaleon${Math.floor(Math.random()*5)+1}.svg`,
			'../../../../imagenes_front/Mascotas_Eje5/Eje5_CorrectFeedback_Tortuga.svg'
		]
		srcImgRespuestaIncorrecta = [
			`../../../../imagenes_front/Mascotas_Eje5/Eje5_MistakeFeedback_Camaleon${Math.floor(Math.random()*5)+1}.svg`,
			'../../../../imagenes_front/Mascotas_Eje5/Eje5_MistakeFeedback_Tortuga.svg'
		]
		srcImgGlosa = [
			`../../../../imagenes_front/Mascotas_Eje5/Eje5_Glosa_Camaleon${Math.floor(Math.random()*5)+1}.svg`,
			'../../../../imagenes_front/Mascotas_Eje5/Eje5_Glosa_Tortuga.svg'
		]
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

export let feedPositivos = [
	'¡Muy bien!',
	'¡Lo has logrado!',
	'¡Genial!',
	'¡Así se hace!'
]

export let feedNegativos = [
	'¡Atención!',
	'¡Algo anda mal!',
	'¡Vuelve a intentarlo!',
	'¡Ten cuidado!'
]
