export default text => {
    var result = text.replace(/\/\[.*?\/\]/g, function (coincidencia) { //coincidencia => '/[funcion()/]'
        var final = coincidencia.length - 4;
        var funcion = coincidencia.substr(2, final).replace(/&gt;/g, '>').replace(/&lt;/, '<');
        try {
            return eval(funcion)
        } catch (error) {
            console.log(error)
            console.log(funcion)
            return coincidencia;
        }
    })
    return result;
}

function capitalize(a) {
    return a.charAt(0).toUpperCase()+a.slice(1)
}