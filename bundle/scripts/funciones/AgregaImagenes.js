const imagenesPorEje = {
	'01': {
		correcta: [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_CorrectFeedback_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_CorrectFeedback_Pato.svg'
		],
		incorrecta: [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_MistakeFeedback_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_MistakeFeedback_Pato.svg'
		],
		glosa: [
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_Glosa_Pata.svg',
			'../../../../imagenes_front/Mascotas_Eje1/Eje1_Glosa_Pato.svg'
		]
	},
	'02': {
		correcta: [
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_CorrectFeedback_Alce.svg',
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_CorrectFeedback_Zorro.svg'
		],
		incorrecta: [
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_MistakeFeedback_Alce.svg',
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_MistakeFeedback_Zorro.svg'
		],
		glosa: [
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_Glosa_Zorro.svg',
			'../../../../imagenes_front/Mascotas_Eje2/Eje2_Glosa_Alce.svg'
		]
	},
	'03': {
		correcta: [
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_CorrectFeedback_Mandril.svg',
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_CorrectFeedback_Tigre.svg'
		],
		incorrecta: [
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_MistakeFeedback_Mandril.svg',
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_MistakeFeedback_Tigre.svg'
		],
		glosa: [
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_Glosa_Mandril.svg',
			'../../../../imagenes_front/Mascotas_Eje3/Eje3_Glosa_Tigre.svg'
		]
	},
	'04': {
		correcta: [
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_CorrectFeedback_OsoPanda.svg',
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_CorrectFeedback_PandaRojo.svg'
		],
		incorrecta: [
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_MistakeFeedback_OsoPanda.svg',
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_MistakeFeedback_PandaRojo.svg'
		],
		glosa: [
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_Glosa_OsoPanda.svg',
			'../../../../imagenes_front/Mascotas_Eje4/Eje4_Glosa_PandaRojo.svg'
		]
	},
	'05': {
		correcta: [
			`../../../../imagenes_front/Mascotas_Eje5/Eje5_CorrectFeedback_Camaleon${Math.floor(Math.random()*5)+1}.svg`,
			'../../../../imagenes_front/Mascotas_Eje5/Eje5_CorrectFeedback_Tortuga.svg'
		],
		incorrecta: [
			`../../../../imagenes_front/Mascotas_Eje5/Eje5_MistakeFeedback_Camaleon${Math.floor(Math.random()*5)+1}.svg`,
			'../../../../imagenes_front/Mascotas_Eje5/Eje5_MistakeFeedback_Tortuga.svg'
		],
		glosa: [
			`../../../../imagenes_front/Mascotas_Eje5/Eje5_Glosa_Camaleon${Math.floor(Math.random()*5)+1}.svg`,
			'../../../../imagenes_front/Mascotas_Eje5/Eje5_Glosa_Tortuga.svg'
		]
	}
}

export default idEjercicio => {
	let nivel = idEjercicio.substr(2, 2)
	//agrega imagen de glosa 
	let divImgGlosa = document.querySelector('div.d-none.d-sm-block.col-sm-2')
	let imgGlosa = document.createElement('img')
	imgGlosa.src = imagenesPorEje[nivel].glosa[Math.floor(Math.random()*2)]
	imgGlosa.alt = 'Imagen Glosa'
	divImgGlosa.appendChild(imgGlosa)
	//agrega imagen feedback correcto
	let brotherImgFeedbackCorrecto = document.querySelector('.feedback-correcto div.text-container')
	let imgFeecbackCorrecto = document.createElement('img')
	imgFeecbackCorrecto.src = imagenesPorEje[nivel].correcta[Math.floor(Math.random()*2)]
	imgFeecbackCorrecto.alt = 'Imagen feedback respuesta correcta'
	imgFeecbackCorrecto.classList.add('imagen-feedback')
	brotherImgFeedbackCorrecto.parentElement.insertBefore(imgFeecbackCorrecto, brotherImgFeedbackCorrecto)

	let brotherImgFeedbackIncorrecto = document.querySelector('.feedback-incorrecto div.text-container')
	let imgFeecbackIncorrecto = document.createElement('img')
	imgFeecbackIncorrecto.src = imagenesPorEje[nivel].incorrecta[Math.floor(Math.random()*2)]
	imgFeecbackIncorrecto.alt = 'Imagen feedback respuesta incorrecta'
	imgFeecbackIncorrecto.classList.add('imagen-feedback')
	brotherImgFeedbackIncorrecto.parentElement.insertBefore(imgFeecbackIncorrecto, brotherImgFeedbackIncorrecto)
}