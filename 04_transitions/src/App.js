import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

// COMPONENTS
import Tgroup from './components/TransitionGroup';
import TransitionComp from './components/Transition';

const App = () => {
  return(
    <BrowserRouter>
      <div>
        <div className="anim_index">
          <Link to="/transition">Transition</Link>
          <Link to="/tgroup">Transitions group</Link>
        </div>
        <Route path="/transition" component={TransitionComp}></Route>
        <Route path="/tgroup" component={Tgroup}></Route>
      </div>
    </BrowserRouter>
  )
}

export default App;
f