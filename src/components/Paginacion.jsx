import React from 'react';

const Paginacion = (props) => {
    return (
        <div className="py-4 lead text-center">
            <button type="button" className="btn btn-primary mr-1">Anterior &larr;</button> &nbsp;
            <button type="button" className="btn btn-primary">Siguiente &rarr;</button>
        </div>
    )
}

export default Paginacion