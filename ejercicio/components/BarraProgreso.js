import React from 'react'

const BarraProgreso = (props) => (
    <header className="container-fluid">
        <div className="row justify-content-center no-gutters">
            <div className="col-11 lineasbarra">
                <hr className="sidelinebar d-none d-sm-block"/>
                <svg xmlns="http://www.w3.org/2000/svg" id="progressbar" version="1.1" className="mx-sm-auto d-sm-block"></svg>
                <hr className="sidelinebar d-none d-sm-block"/>
            </div>
            <div className="col-1 d-sm-none">

            </div>
        </div>
    </header>
)

export default BarraProgreso