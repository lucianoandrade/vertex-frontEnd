import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import pesquisar from '../pages/acheVideos';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={pesquisar} />
        </Switch>
    </BrowserRouter>
);

export default Routes;