import React from "react";
import Detalhes from '../components/Detalhes';

export default (props) => {
    const prop = props  
    return (
        <>
          <Detalhes onDetalhes={prop} />
        </>
    )
};