import React from 'react'

import BarraProgreso from './BarraProgreso'
import Contenido from './Contenido'
import Footer from './Footer'
import Feedback from './Feedback'
import Glosa from './Glosa'

const Ejercicio = (props) => {
    let enunciado = props.contenidos.filter(x => x.tipo === 'enunciado')
    let respuesta = props.contenidos.filter(x => x.tipo === 'respuesta')
    let glosa = props.contenidos.filter(x => x.tipo === 'glosa')
    return (
        <React.Fragment>
            <BarraProgreso/>
            <Contenido enunciado={enunciado} respuesta={respuesta} version={props.version}/>
            <Footer/>
            <Feedback/>
            <Glosa glosa={glosa} version={props.version}/>
        </React.Fragment>
    )
}

export default Ejercicio