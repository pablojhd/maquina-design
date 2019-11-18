import React from 'react'
import DibujaFuncionalidad from './DibujaFuncionalidad'

const Contenido = (props) => (
    <section className="container-fluid">
        <div className="row no-gutters">
            {props.enunciado.map(x => <DibujaFuncionalidad 
                key={x._id} 
                nombreFuncion={x.nombreFuncion} 
                params={x.params} 
                version={props.version}
            />)}
        </div>
        <div className="row no-gutters justify-content-center">
            {props.respuesta.map(x => <DibujaFuncionalidad 
                key={x._id} 
                nombreFuncion={x.nombreFuncion} 
                params={x.params} 
                version={props.version}
            />)}
        </div>
    </section>
)

export default Contenido