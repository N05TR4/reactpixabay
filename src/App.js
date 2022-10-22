import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes: []
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const url = `https://pixabay.com/api/?key=30764445-19e5cbfb839dfac6666c2941f&q=${termino}&per_page=28`;

    fetch(url).then(respuesta => respuesta.json()).then(resultado => this.setState({ imagenes: resultado.hits }))
    
  }


  datosBusqueda = (termino) => {
    this.setState({
      termino
    }, () =>{
      this.consultarApi();
    })
  }


  render() { 
    return (
      <div className="container mb-3">
        <div className="jumbotron p-5">
          <div className="card border-dark mb-3">
            <div className="card-header lead text-center">Buscador de Imagenes</div>
            <div className="card-body">

              <Buscador 
                datosBusqueda = {this.datosBusqueda}
              />

            </div>
          </div>
          <Resultado 
            imagenes = {this.state.imagenes}
          />
          
        </div>
      </div>

    );
  }
}


export default App;
