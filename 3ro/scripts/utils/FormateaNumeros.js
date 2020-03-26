export default (texto, espacio) => {
    return texto.replace(/\d{1,}(\.\d{1,})?/g, function (coincidencia) { //coincidencia => 2000
        let entero = coincidencia.split('.')[0]
        let decimal = coincidencia.split('.')[1]
        let enteroEspaciado = entero.length >= 4 ? '' : entero
        if (entero.length >= 4) {
            let enteroReverse = entero.split('').reverse()
            let count = 1
            enteroReverse.forEach(function (numero, index) {
				if (count === 3 && (index+1) < enteroReverse.length) {
                    enteroEspaciado = espacio + numero + enteroEspaciado
                    count = 1
                } else {
                    enteroEspaciado = numero + enteroEspaciado
                    count++;
                }
            })
        }
        return `${enteroEspaciado}${decimal ? ',' : ''}${decimal ? decimal : ''}`
    })
}