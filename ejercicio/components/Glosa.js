import React from 'react'
import DibujaFuncionalidad from './DibujaFuncionalidad'

const Glosa = (props) => (
    <div id="glosa">
        <div className="modal-content animate-zoom-glosa">
            <div className="container-fluid">
                <div className="row no-gutters">
                    <div className="col-12 offset-sm-2 col-sm-10">
                        <h2>Solución</h2>
                    </div>
                    <div className="d-none d-sm-block col-sm-2">
                        <img src="/images/patos/togaSuki.svg" className="img-fluid"/>
                    </div>
                    <div className="col-12 col-sm-10">
                        <div className="row no-gutters justify-content-center">
                            {props.glosa.map(x => <DibujaFuncionalidad 
                                key={x._id} 
                                nombreFuncion={x.nombreFuncion} 
                                params={x.params} 
                                version={props.version}
                            />)}
                        </div>
                    </div>
                </div>
                <div className="row no-gutters justify-content-end">
                    <div className="col-4 col-sm-3">
                        <button type="button" id="btnCerrarGlosa" className="boton boton-icon boton-animation icon-responder">
                            <span>CONTINUAR</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Glosa