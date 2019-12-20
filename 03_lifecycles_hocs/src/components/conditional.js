import React,{ Component } from 'react';

class Conditional extends Component {

    state = {
        loading:true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false
            })
        },1500)
    }


    render(){
        if(this.state.loading){
            return(
                <div>Loading ...</div>
            )
        }else{
            return(
                <div>hello this is the conditional component</div>
            )
        }
    }

    
}

export default Conditional;