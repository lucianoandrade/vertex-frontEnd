import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import pesquisar from '../pages/acheVideos';
import detalhes from '../pages/detalhesVideos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={pesquisar} />
            <Route path="/detalhes" component={detalhes} />
        </Switch>
    </BrowserRouter>
);

export default Routes;