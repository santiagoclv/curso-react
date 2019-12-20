import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import '../css/App.css';

class Slide extends Component{
    state = {
        items:[]
    }
    
    showElements () {
        return this.state.items.map((item,i)=>(
            <CSSTransition
                classNames="item"
                timeout={200}
                key={i}
            >
                <div className="item" >{item}</div>
            </CSSTransition>
            
        ))
    }

    generateNumber(){
       this.setState((state) => ({
           items: state.items.concat(Math.floor(Math.random()* 100) +1)
       }))
    }

    removeNumber(){
        this.setState((state) => ({
            items: state.items.slice(0,-1)
        }));
    }

    render(){
        return(
            <>
                <TransitionGroup>
                    {this.showElements()}
                </TransitionGroup>
                
             
                <div className="btns">
                    <div className="btn-add" onClick={()=> this.generateNumber()}>Add Elements</div>
                    <div className="btn-remove" onClick={()=> this.removeNumber()}>Remove Elements</div>
                </div>
            </>
        )
    }



}


export default Slide;