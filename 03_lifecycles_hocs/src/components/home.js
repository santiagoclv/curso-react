import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = { name:'Francis'}
       // console.log('1 - constructor')
    }

    // The real place to update state based on props?
    static getDerivedStateFromProps(props,state){
        console.log('2 - getDerivedStateFromProps')
        if(state.name === 'Ron'){
            return {
                name:'Milhouse'
            }
        }
        return null;
    }

    // Trigger updates in base of return value
    shouldComponentUpdate(nextProps,nextState){
        //console.log('x - shouldComponentUpdate')
        if(nextState.name === 'Steve'){
            return false
        }
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        let age = 20;
        return age
    }

    render(){
        console.log(this.state)
        return(
            <div onClick={()=> this.setState({name:'Ron'})}>CHANGE NAME</div>
        )
    }

    componentDidUpdate(prevProps,prevState,snapshot){
        console.log('x - componentDidUpdate ');
        //console.log(prevState)
       // console.log(this.state)
       console.log(snapshot)
    }

    componentDidMount(){
       // console.log('4 - componentDidMount')
    }

    componentWillUnmount(){
       // console.log('x - componentDidMount')
    }


}


export default Home;