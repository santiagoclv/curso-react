import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Article from './components/Article';

const Routes = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/article/:id" component={Article}/>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
)

export default Routes;