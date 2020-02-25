import React from 'react';
import logoPesquiseAqui from "./img/pesquiseAqui.png"

function Pesquisar() {
  return (
    <section className="pesquisarContainer"> 
      <h2> 
          <img className="logo" src={logoPesquiseAqui} alt="Logo acheVideo" />
      </h2>
      <form>
        <input type="text" placeholder="Pesquise aqui" name="pesquisar"/>
        <button type="subimit">Buscar</button>
      </form>
    </section>
  );
}

export default Pesquisar