import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';

export default props =>{

    return <BrowserRouter>
        <Switch>
            <Route exact path='/Cadastro'>
                <SignUp/>
            </Route>
            <Route exact path='/'>
                <LandingPage/>
            </Route>
        </Switch>
    </BrowserRouter>
}