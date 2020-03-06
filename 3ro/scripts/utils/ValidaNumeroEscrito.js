let palabras = {
    "0": ["", "", "", "", ""], //unidad, prefijo unidad, decena, centena
    "1": ["uno", "on", "diez", "cien"],
    "2": ["dos", "do", "veinte", "doscientos"],
    "3": ["tres", "tre", "treinta", "trescientos"],
    "4": ["cuatro", "cator", "cuarenta", "cuatrocientos"],
    "5": ["cinco", "quin", "cincuenta", "quinientos"],
    "6": ["seis", "", "sesenta", "seiscientos"],
    "7": ["siete", "", "setenta", "setecientos"],
    "8": ["ocho", "", "ochenta", "ochocientos"],
    "9": ["nueve", "", "noventa", "novecientos"]
};
let regularExpression = {
    "0": ["", "", "", "", ""],
    "1": ["uno", "on", "die[sz]", "[csz]ien"],
    "2": ["do[sz]", "do", "[vb]einte", "do[csz]{1,2}iento[sz]"],
    "3": ["tre[sz]", "tre", "treinta", "tre[szc]{1,2}iento[sz]"],
    "4": ["[ckq]uatro", "[ckq]ator", "[ckq]uarenta", "[ckq]uatro[szc]{1,2}iento[sz]"],
    "5": ["[csz]in[ck]o", "(quin|kin)", "[csz]in[cqk]uenta", "(quin|kin)iento[sz]"],
    "6": ["[scz]ei[sz]", "", "[scz]e[scz]enta", "[scz]ei[scz]{1,2}iento[sz]"],
    "7": ["[scz]iete", "", "[scz]etenta", "[scz]ete[szc]{1,2}iento[sz]"],
    "8": ["o[sc]ho", "", "o[sc]henta", "o[sc]ho[scz]{1,2}iento[sz]"],
    "9": ["nue[vb]e", "", "no[vb]enta", "no[vb]e[scz]{1,2}iento[sz]"]
};

export default (_word, numberArr) => {
    let umil = numberArr[0]
    let centena = numberArr[1]
    let decena = numberArr[2]
    let unidad = numberArr[3]
    let word = _word.toLowerCase().trim();
    let rgx = ''
    if (unidad > 0) {
        //uno, dos, tres...
        if (decena == 0) {
            rgx = regularExpression[unidad][0];
        } else if (decena == 1) {
            //once doce, trece, catorce, quince
            if (unidad > 0 && unidad < 6) {
                rgx = regularExpression[unidad][1] + "[scz]e"
            }
            // dieciseis, diecisiete, dieciocho, diecinueve
            else if (unidad >= 6) {
                rgx = "die[csz]i" + regularExpression[unidad][0]
            }
        }
        //veinituno, veintidos, veintitres....
        else if (decena == 2) {
            rgx = "[vb]einti" + regularExpression[unidad][0];
        }
        // treinta y uno, cuarenta y dos, cincuenta y tres...
        else if (decena > 2) {
            rgx = regularExpression[decena][2] + " y " + regularExpression[unidad][0]
        }
    } else if (unidad == 0) {
        //veinte, treinta, cuarenta...
        if (decena > 0) {
            rgx = regularExpression[decena][2]
        }
    }
    //cien, doscientos, trescientos...
    if (centena > 0) {
        if (centena == 1) {
            if (decena == 0 && unidad == 0) rgx = regularExpression[centena][3] + " " + rgx;
            if (decena != 0 || unidad != 0) rgx = "[szc]iento " + rgx
        } else if (centena > 1) {
            rgx = regularExpression[centena][3] + " " + rgx;
        }
    }
    //mil, dos mil, tres mil
    if (umil == 1) rgx = "mil " + rgx;
    else if (umil > 1) rgx = regularExpression[umil][0] + " mil " + rgx;

    rgx = rgx.trim();
    rgx = rgx.replace(/^/, '^')
    rgx = rgx + '$'
    let newRgx = new RegExp(rgx);
    return newRgx.test(word)
}