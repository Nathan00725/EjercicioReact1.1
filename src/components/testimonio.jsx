import React from 'react'
import '../style-sheets/Testimonio.css'


const testimonio = (props) => {
    return (
        <div className='contenedor-testimonio'>
            <img className='imagen-testimonio' src={require('../images/Image20240227183528.png')} alt="imagen" />
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'>{props.nombre} en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
                <p className='texto-cargo'>{props.testimonio}</p>
            </div>
        </div>
    )
}

export default testimonio
