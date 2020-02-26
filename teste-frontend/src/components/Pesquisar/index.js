import React from 'react';
import logo from "./img/acheVideos.png";
import { Button, TextField } from "@material-ui/core";
import "./styles.scss";

function Pesquisar() {
  return (
    <section className="pesquisarContainer">
      <h2>
        <img className="logo" src={logo} alt="Logo Ache Videos" />
      </h2>  
      <form className="form"> 
        <TextField
          name="search" 
          className="search" 
          placeholder="Pesquisar..."
          variant="outlined"
          fullWidth
        />      
        <Button className="btnSearch" 
          variant="contained" 
          color="primary"
        >
          Buscar
        </Button>
      </form>
    </section>
  );
}

export default Pesquisar