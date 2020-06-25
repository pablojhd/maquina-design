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

export default (idEjercicio, opcion) => {
	return imagenesPorEje[idEjercicio.substr(2,2)][opcion][Math.floor(Math.random() * 2)]
}