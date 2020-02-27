import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import logo from "./img/acheVideos.png";
import youtube from "../../services/youtube";

import "./styles.scss";

function Pesquisar() {
  const [term, setTerm] = useState("");
 
  const handleChange = (e) => {
    setTerm(e.target.value);
  }  

  async function handleSubmit () {
    const response = await youtube.get("search", {
      params: {
        part:'snippet',
        maxResults: 10,
        key: 'AIzaSyDdu3OaB_m--RiVza76T_IBLhdzUhaaAkc',
        q: term
      }
    });
    console.log(response)    
  }

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
          value={term}
          onChange={handleChange}
          fullWidth
        />      
        <Button
          onClick={handleSubmit}
          className="btnSearch" 
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