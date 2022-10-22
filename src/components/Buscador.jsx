import React, { Component } from 'react';

class Buscador extends Component {

    busquedaRef = React.createRef();

    obtenerDatos = (e) => {
        e.preventDefault();
        
        // Tomamos el valor del input
        const termino = this.busquedaRef.current.value;

        // Lo enviamos al componente principal App
        this.props.datosBusqueda(termino);
    }
    
    render() { 
        return (

            
            
            <form onSubmit={this.obtenerDatos}>
               
                <div className='row'>
                    <div className='form-group col-md-8'>
                        <input ref={this.busquedaRef} type="text" className="form-control " placeholder="Buscar Imagen" />
                        
                    </div>
                    <div className='form-group col-md-4'>
                        {/* <input type="submit" className="btn btn-lg btn-primary" value="Buscar" /> */}
                        <button className="btn btn-primary" type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        &nbsp; Buscar
                        </button>
                    </div>
                    
                </div>
                
            </form>


            
        );
    }
}
 
export default Buscador;