import React from 'react'
import DibujaTexto from '../../src/components/Funcionalidades/Texto/DibujaTexto'
import DibujaInputRadio from '../../src/components/Funcionalidades/InputRadio/DibujaInputRadio'

class DibujaFuncionalidad extends React.Component {
    render() {
        const { nombreFuncion, params, version } = this.props
        switch(nombreFuncion) {
            case 'Insertar Texto':
                return <DibujaTexto {...params} version={version}/>
            case 'Input Radio':
                return <DibujaInputRadio {...params} version={version}/>
            default:
                return <p>Funcion {nombreFuncion} aun no existe</p>
        }
    }
}

export default DibujaFuncionalidad