export default (tipoEjercicio, feedbackElement) => {
	feedbackElement.style.display = 'none'
	document.querySelector('footer').style.display = 'grid'

	if (tipoEjercicio === 'seleccion multiple') {
		document.querySelector('input[type=radio]:checked').checked = false
		document.getElementsByName('answer').forEach(input => {
			input.disabled = false
		})
	} else {
		document.querySelectorAll('input[type=text].inputTexto-incorrecto').forEach(input => {
			input.disabled = false
			input.classList.remove('inputTexto-incorrecto')
			input.value = ''
		})
	}
}
