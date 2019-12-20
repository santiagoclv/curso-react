import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile'; 
import PostItem from './components/post_item';
import NotFound from './components/404';

const App = () => (
    <BrowserRouter>
        <header>
            <NavLink to="/" exact activeStyle={{ color:'red'}} activeClassName="selected">Home</NavLink><br/>

            <NavLink to="/posts" activeStyle={{ color:'red'}} activeClassName="selected">Posts</NavLink><br/>

            <NavLink to="/profile"activeStyle={{ color:'red'}} activeClassName="selected">Profile</NavLink><br/>
            <br/><br/>
        </header>
        <Switch>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/posts"  component={Posts}/>
            <Route path="/profile"  component={Profile}/>
            <Route path="/"  exact component={Home}/>
            <Route render={()=> <h3>Oops, page not found</h3>}/>
        </Switch>
        
    </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'));

