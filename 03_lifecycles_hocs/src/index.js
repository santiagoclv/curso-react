import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

import Home from './components/home';
import Posts from './components/posts';
import Profile from './components/profile'; 
import PostItem from './components/post_item';
import Conditional from './components/conditional';
import PureComp from './components/pureComp';
import UserComp from './components/user';

const App = () => (
    <BrowserRouter>
        <header>
            <NavLink to="/" exact activeStyle={{ color:'red'}} activeClassName="selected">Home</NavLink><br/>

            <NavLink to="/posts" activeStyle={{ color:'red'}} activeClassName="selected">Posts</NavLink><br/>

            <NavLink to="/conditional" activeStyle={{ color:'red'}} activeClassName="selected">Conditional</NavLink><br/>

            <NavLink to="/purecomp" activeStyle={{ color:'red'}} activeClassName="selected">Pure comp</NavLink><br/>

            <NavLink to="/usercomp" activeStyle={{ color:'red'}} activeClassName="selected">User comp</NavLink><br/>

            <NavLink to="/profile"activeStyle={{ color:'red'}} activeClassName="selected">Profile</NavLink><br/>
            <br/><br/>
        </header>
        <Switch>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/posts"  component={Posts}/>
            <Route path="/profile"  component={Profile}/>
            <Route path="/conditional"  component={Conditional}/>
            <Route path="/purecomp"  component={PureComp}/>
            <Route path="/usercomp"  component={UserComp}/>
            <Route path="/"  exact component={Home}/>
            <Route render={()=> <h3>Oops, page not found</h3>}/>
        </Switch>
        
    </BrowserRouter>
)


ReactDOM.render(<App />, document.getElementById('root'));

