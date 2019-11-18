import React from 'react'

const Footer = (props) => (
    <footer className="container-fluid">
        <div className="row no-gutters align-items-center justify-content-between">
            <div className="col-4 col-sm-3">
                <button type="button" id="btnConsulta" className="boton boton-icon boton-animation icon-consulta">
                    <span>CONSULTA</span>
                </button>
            </div>
            <div className="col-4 col-sm-3">
                <button type="button" id="btnResponder" className="boton boton-icon boton-animation icon-responder" disabled>
                    <span>RESPONDER</span>
                </button> 
            </div>
        </div>
    </footer>
)

export default Footer