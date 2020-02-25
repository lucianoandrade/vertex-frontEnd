import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import pesquisar from '../views/pesquisar/pesquisar';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={pesquisar} />
        </Switch>
    </BrowserRouter>
);

export default Routes;