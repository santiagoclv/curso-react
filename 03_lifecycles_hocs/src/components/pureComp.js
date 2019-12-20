import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    /**
     * PureComponent do not trigger render on state's updates only if the value has change for real. 
     */

    state = {
        name: 'Francis'
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     if(nextState.name === this.state.name){
    //         return false
    //     }
    //     return true
    // }


    render() {
        console.log('Render')
        return (
            <>
                <h3>{this.state.name}</h3>
                <button
                    onClick={
                        ()=> this.setState({name:'Francis'})
                    }
                >
                    Click to change
                </button>
            </>
        )
    }
}

export default PureComp;
