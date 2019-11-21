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
	}
}