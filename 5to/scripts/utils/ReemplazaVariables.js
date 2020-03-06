export default (texto, variables, isTutorial) => {
    var result = texto.toString().replace(/\$[a-z]/g, function (coincidencia) { //coincidencia => '$a'
        for (var indexVar = 0; indexVar < variables.length; indexVar++) {
            if (variables[indexVar].var == coincidencia[1]) {
                return isTutorial ? variables[indexVar].vt : variables[indexVar].val;
            }
        }
    });
    return result;
}