import React from 'react'

const Feedback = (props) => (
    <div className="feedback">
        <div className="container-fluid animate-zoom">
            <div className="row no-gutters no-gutters align-items-center justify-content-end">
                <div className="d-none col-sm-3 d-sm-block">
                    <img height="100"/>
                </div>
                <div className="col-12 col-sm-6">
                    <span></span>
                    <p></p>
                </div>
                <div className="col-4 col-sm-3">
                    <button type="button" id="btnContinuar" className="boton boton-icon boton-animation icon-responder">
                        <span>CONTINUAR</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
)

export default Feedback