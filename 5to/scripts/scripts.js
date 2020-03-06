import { barraDeProgreso } from './funciones/BarraProgreso'
import { handleRespuesta } from './funciones/HandleRespuesta'

barraDeProgreso()

document.getElementById('btnResponder').addEventListener('click', handleRespuesta)