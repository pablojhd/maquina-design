import reemplazaVariables from './utils/ReemplazaVariables'
import reemplazaFunciones from './utils/ReemplazaFunciones'
import datosProgreso from './utils/DatosProgreso'
import iniciaListeners from './funciones/IniciaListeners'
import handleRespuesta from './funciones/HandleRespuesta'
import barraProgreso from './funciones/BarraProgreso'

const init = () => {
	//dibuja la barra de porgreso del ejercicio
	const { tmpProgreso, tmpTotal } = datosProgreso()
	barraProgreso(tmpProgreso, tmpTotal)
	//se encarga del numero de intento, escuchando al hidden que puede ser cambiado por la plataforma
	let numeroIntento = parseInt(document.getElementById('hiddenIntento').value) || 1
	document.getElementById('hiddenIntento').addEventListener('change', function (event) {
		numeroIntento = parseInt(event.target.value)
	})
	//lee variables dataset del body
	const idEjercicio = document.body.dataset.id
	const version = JSON.parse(Buffer(document.body.dataset.version, 'base64').toString('utf8'))
	const validaciones = JSON.parse(reemplazaFunciones(reemplazaVariables(Buffer(document.body.dataset.x, 'base64').toString('utf8'), version.vars, false)))
	const tipoEjercicio = document.body.dataset.tipoejercicio
	//crea los eventos para habilitar el boton de respuesta y controlar algunas interacciones no debidas
	iniciaListeners(tipoEjercicio)
	
	document.getElementById('btnResponder').addEventListener('click', event => handleRespuesta(event, {
		idEjercicio,
		numeroIntento,
		validaciones,
		tipoEjercicio,
		tmpProgreso
	}))
}


if (document.readyState === 'loading') {  // Loading hasn't finished yet
	document.addEventListener('DOMContentLoaded', init)
} else {  // `DOMContentLoaded` has already fired
	init()
}