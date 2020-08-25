export default tipoEjercicio => {
	const preventAction = event => {
		event.preventDefault()
		return false
    }

    document.getElementById('body').addEventListener('drop', preventAction)
    document.getElementById('body').addEventListener('contextmenu', preventAction)
    
    if(tipoEjercicio === 'seleccion multiple') {
        //inputs de tipo radio
        document.querySelectorAll('input[type=radio]').forEach(input => {
            input.addEventListener('change', () => {
                document.getElementById('btnResponder').disabled = false
            })
        })
    } else {
        //inputs de tipo text
        document.querySelectorAll('input[type=text]').forEach(input => {
            input.addEventListener('keyup', () => {
                let todasRespondidas = true
                for (let input of document.querySelectorAll('input[type=text]')) {
                    if (input.value.trim() === '') {
                        todasRespondidas = false
                        break
                    }
                }
                document.getElementById('btnResponder').disabled = !todasRespondidas
            })
            input.addEventListener('copy', preventAction)
            input.addEventListener('paste', preventAction)
            input.addEventListener('cut', preventAction)
        })
        document.querySelectorAll('[data-tipoinput="alfanumerico"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                let validacion = (e.keyCode >= 48 && e.keyCode <= 57) //numeros
                    || (e.keyCode >= 65 && e.keyCode <= 90) //letra mayuzc
                    || (e.keyCode >= 97 && e.keyCode <= 122) //letra minusc
                    || (e.keyCode == 241 || e.keyCode == 209) //ñ y Ñ
                    || (e.keyCode == 225 || e.keyCode == 233 || e.keyCode == 237 || e.keyCode == 243 || e.keyCode == 250) //áéíóú
                    || (e.keyCode == 193 || e.keyCode == 201 || e.keyCode == 205 || e.keyCode == 211 || e.keyCode == 218) //ÁÉÍÓÚ
                    || (e.keyCode == 32) //espacio
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
        })
        document.querySelectorAll('[data-tipoinput="texto-numerico"],[data-tipoinput="texto"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                let validacion = (e.keyCode >= 65 && e.keyCode <= 90) //letra mayuzc
                    || (e.keyCode >= 97 && e.keyCode <= 122) //letra minusc
                    || (e.keyCode == 241 || e.keyCode == 209) //ñ y Ñ
                    || (e.keyCode == 225 || e.keyCode == 233 || e.keyCode == 237 || e.keyCode == 243 || e.keyCode == 250) //áéíóú
                    || (e.keyCode == 193 || e.keyCode == 201 || e.keyCode == 205 || e.keyCode == 211 || e.keyCode == 218) //ÁÉÍÓÚ
                    || (e.keyCode == 32) //espacio
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
        })
        document.querySelectorAll('[data-tipoinput="comparacion"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                let validacion = (e.keyCode === 60 || e.keyCode === 61 || e.keyCode === 62)
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
        })
        document.querySelectorAll('[data-tipoinput="numero"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                var validacion = e.keyCode >= 48 && e.keyCode <= 57 //solo numero
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
            input.addEventListener('keyup', (e) => {
                var arrayReverse = String(e.target.value).replace(/\s/g, '').split("").reverse(); //espacio cada 3 numeros
                for (var i = 0, count = 0, valor = ''; i < arrayReverse.length; i++) {
                    count++;
                    if (count === 3 && arrayReverse[i + 1]) {
                        valor = ' ' + arrayReverse[i] + valor;
                        count = 0;
                    } else {
                        valor = arrayReverse[i] + valor;
                    }
                }
                e.target.value = valor;
            })
        })
        document.querySelectorAll('[data-tipoinput="numero-negativo"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                var validacion = e.keyCode >= 48 && e.keyCode <= 57 || //solo numero
                                    e.keyCode == 45 //menos -       
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
            input.addEventListener('keyup', (e) => {
                var arrayReverse = String(e.target.value).replace(/\s/g, '').split("").reverse(); //espacio cada 3 numeros
                for (var i = 0, count = 0, valor = ''; i < arrayReverse.length; i++) {
                    count++;
                    if (count === 3 && arrayReverse[i + 1] && arrayReverse[i + 1] != '-') {
                        valor = ' ' + arrayReverse[i] + valor;
                        count = 0;
                    } else {
                        valor = arrayReverse[i] + valor;
                    }
                }
                e.target.value = valor;
            })
        })
        document.querySelectorAll('[data-tipoinput="decimal"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                var validacion = e.keyCode >= 48 && e.keyCode <= 57 || //solo numero
                    e.keyCode === 44 //coma
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
            input.addEventListener('keyup', (e) => {
                let valorReal = String(e.target.value).replace(' ', '')
                let entero = String(valorReal).split(',')[0]
                let decimal = String(valorReal).split(',')[1]
                let enteroEspaciado = entero.length >= 4 ? '' : entero
                if (entero.length >= 4) {
                    let enteroReverse = entero.split('').reverse()
                    let count = 1
                    enteroReverse.forEach(function (numero, i) {
                        if (count === 3 && enteroReverse[i + 1]) {
                            enteroEspaciado = ' ' + numero + enteroEspaciado
                            count = 1
                        } else {
                            enteroEspaciado = numero + enteroEspaciado
                            count++;
                        }
                    })
                }
                e.target.value = `${enteroEspaciado}${typeof decimal === 'undefined' ? '' : ','}${typeof decimal === 'undefined' ? '' : decimal}`
            })
        })
        document.querySelectorAll('[data-tipoinput="decimal-negativo"]').forEach(input => {
            input.addEventListener('keypress', (e) => {
                var validacion = e.keyCode >= 48 && e.keyCode <= 57 || //solo numero
                    e.keyCode === 44 || //coma
                    e.keyCode == 45 //menos -
                if (!validacion) {
                    e.preventDefault();
                    return false;
                }
            })
            input.addEventListener('keyup', (e) => {
                let valorReal = String(e.target.value).replace(' ', '')
                let entero = String(valorReal).split(',')[0]
                let decimal = String(valorReal).split(',')[1]
                let enteroEspaciado = entero.length >= 4 ? '' : entero
                if (entero.length >= 4) {
                    let enteroReverse = entero.split('').reverse()
                    let count = 1
                    enteroReverse.forEach(function (numero, i) {
                        if (count === 3 && enteroReverse[i + 1] && enteroReverse[i + 1] != '-') {
                            enteroEspaciado = ' ' + numero + enteroEspaciado
                            count = 1
                        } else {
                            enteroEspaciado = numero + enteroEspaciado
                            count++;
                        }
                    })
                }
                e.target.value = `${enteroEspaciado}${typeof decimal === 'undefined' ? '' : ','}${typeof decimal === 'undefined' ? '' : decimal}`
            })
        })
    }
}