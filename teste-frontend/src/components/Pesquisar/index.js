import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

import logo from "./img/acheVideos.png";
import "./styles.scss";

function Pesquisar ({ onTerm }) {
  const [animation, setAnimation] = useState({margin: '15% 0'});
  
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();  
    onTerm(term)
  }

  return (
    <section className="pesquisarContainer" style={animation}>
      <h2>
        <img className="logo" src={logo} alt="Logo Ache Videos" />
      </h2>  
      <form className="form" onSubmit={handleSubmit}> 
        <TextField
          name="search" 
          className="search" 
          placeholder="Pesquisar..."
          variant="outlined"
          value={term}
          onChange={handleChange}
          fullWidth
          required
        />      
        <Button
          type='submit'
          className="btnSearch" 
          variant="contained" 
          color="primary"
          onClick={() => setAnimation({
                          margin: '0 0 5% 0', 
                          transitionDuration: "1s"                                 
          })}
        >
          Buscar
        </Button>
      </form>
    </section>
  );
}

export default Pesquisar