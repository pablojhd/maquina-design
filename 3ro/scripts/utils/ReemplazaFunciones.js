export default text => {
    var result = text.replace(/\/\[.*?\/\]/g, function (coincidencia) { //coincidencia => '/[funcion()/]'
        var final = coincidencia.length - 4;
        var funcion = coincidencia.substr(2, final).replace(/&gt;/g, '>').replace(/&lt;/, '<');
        try {
            return eval(funcion)
        } catch (error) {
            /*console.log(error)
            console.log(funcion)*/
            return coincidencia;
        }
    })
    return result;
}

function frac(entero, numerador, denominador) {
    return `<span class=\\"eq\\">${entero ? `<span class=\\"integer\\">${entero}</span>` : ''}<span class=\\"fraction\\"><span class=\\"fup\\">&nbsp;${numerador}&nbsp;</span><span class=\\"bar\\">/</span><span class=\\"fdn\\">&nbsp;${denominador}&nbsp;</span></span></span>`
}

function capitalize(a) {
    return a.charAt(0).toUpperCase()+a.slice(1)
}