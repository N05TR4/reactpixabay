import React, { Component } from 'react';
import Buscador from "./components/Buscador";
import Resultado from './components/Resultado';

class App extends Component {

  state = {
    termino : '',
    imagenes: [],
    pagina: ''
  }

  scroll = ()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start')
  }

  paginaAnterior = ()=>{
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;
    if (pagina === 1) return null;
    pagina--;
    this.setState({
      pagina
    }, ()=> {
      this.consultarApi();
      this.scroll();
    });
    
  }

  paginaSiguiente = ()=>{
    // Leer el state de la pagina actual
    let pagina = this.state.pagina;
    pagina++;
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    });
    
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=API_KEY&q=${termino}&per_page=28&page=${pagina}`;

    fetch(url).then(respuesta => respuesta.json()).then(resultado => this.setState({ imagenes: resultado.hits }))
    
  }


  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
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
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
          
        </div>
      </div>

    );
  }
}


export default App;
