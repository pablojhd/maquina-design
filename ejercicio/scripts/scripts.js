import { barraDeProgreso } from './funciones/BarraProgreso'
import { handleRespuesta } from './funciones/HandleRespuesta'

barraDeProgreso()

document.getElementById('btnResponder').addEventListener('click', handleRespuesta)

document.querySelectorAll('input[type=radio]').forEach(input => {
	input.addEventListener('change', () => {
		document.getElementById('btnResponder').disabled = false
	})
})