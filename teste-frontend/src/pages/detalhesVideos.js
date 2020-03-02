import React from "react";
import Detalhes from "../components/Detalhes";

export default props => {
  const detalhes = props;
  return (
    <>
      <Detalhes onDetalhes={detalhes} />
    </>
  );
};
