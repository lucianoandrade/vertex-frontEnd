import React from "react";
import "./styles.scss";

function Navegacao({ page }) {
  return (
    <div className="containerPagination">
      <button type="button" className="btnPage" onClick={page}>
        Anterior
      </button>
      <button
        type="button"
        className="btnPage"
        value={"Proximo"}
        onClick={page}
      >
        Proximo
      </button>
    </div>
  );
}

export default Navegacao;