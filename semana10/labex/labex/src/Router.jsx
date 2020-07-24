import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LandingPage from './pages/LandingPage/LandingPage';
import SignUp from './pages/SignUp/SignUp';
import Home from "./pages/Home/Home";
import SuccesApply from "./pages/SuccesPage/SuccesApply";

export default props =>{

    return <BrowserRouter>
        <Switch>
            <Route exact path='/'>
                <LandingPage/>
            </Route>
            <Route exact path='/home/:token'>
               <Home/>
            </Route>
            <Route exact path='/Cadastro'>
                <SignUp/>
            </Route>
            <Route exact path='/succes'>
                <SuccesApply />
            </Route>
            <Route  path='/'>
                <div>Pagina não encontrada Tá pegando fogo bicho!!</div>
            </Route>
        </Switch>
    </BrowserRouter>
}