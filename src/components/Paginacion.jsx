import React from 'react';

const Paginacion = (props) => {
    return (
        <div className="py-4 lead text-center">
            <button onClick={props.paginaAnterior} type="button" className="btn btn-primary mr-1">Anterior &larr;</button> &nbsp;
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-primary">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion