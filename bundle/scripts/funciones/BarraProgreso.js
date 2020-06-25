export default (tmpProgreso, tmpTotal) => {
	let anchoBarra = 250;//254 para el espacio del margen
	let svg = document.getElementById('progressbar')
	let separacion = anchoBarra / (tmpTotal + 1)
	let bordeBarra = crearElemento('rect', {
		x: 2,
		y: 2,
		width: anchoBarra,
		height: 32,
		fill: 'none',
		stroke: '#CCCBCB',
		strokeWidth: '1',
		rx: 5,
		ry: 5
	})
	svg.appendChild(bordeBarra)

	let anchoLinea = Number(anchoBarra - (separacion * 2))
	let lineaBarra = crearElemento('rect', {
		x: separacion,
		y: 17,
		width: anchoLinea,
		height: 2,
		fill: '#E7E5E5',
		rx: 2,
		ry: 2
	});
	svg.appendChild(lineaBarra)

	for (let i = 0; i < tmpTotal; i++) {
		let colorCirculo, rCircle;
		if (tmpProgreso.length > i) {
			rCircle = 4;
			if (tmpProgreso[i].correcto) {
				colorCirculo = tmpProgreso[i].NUMEROINTENTOS === 1 ? '#00AC4D' : '#E2C04D'
			} else {
				colorCirculo = '#E24B4A'
			}
		} else if (tmpProgreso.length === i) {
			rCircle = 8
			colorCirculo = '#1280B1'
		} else {
			rCircle = 4
			colorCirculo = '#CCCBCB'
		}
		let cxCircle = separacion * (i + 1) + 2;
		let circle = crearElemento('circle', {
			cx: cxCircle,
			cy: 18,
			r: rCircle,
			fill: colorCirculo,
			stroke: 'none'
		})
		svg.appendChild(circle);
		if (tmpProgreso.length === i) {
			let textPosicion = crearElemento('text', {
				x: cxCircle,
				y: 22,
				fontFamily: 'sans-serif',
				fontSize: '11px',
				textAnchor: 'middle',
				fill: 'white'
			})
			textPosicion.textContent = tmpProgreso.length + 1
			svg.appendChild(textPosicion)
		}
	}
}

const crearElemento = (nombre, atributos) => {
    let element = document.createElementNS("http://www.w3.org/2000/svg", nombre)
    for (let p in atributos) {
        element.setAttributeNS(null, p.replace(/[A-Z]/g, function (m, p, o, s) {
            return "-" + m.toLowerCase();
        }), atributos[p])
    }
    return element
}