import React, { Component } from 'react'
import MyContext from './context';

class ContextProvider extends Component {

    state = {
        profile:{
            username:'Francis',
            lastname:'Jones',
            age:20
        }
    }

  render() {
    return (
      <MyContext.Provider
        value={{
            profile:this.state.profile,
            hey:()=>{
                alert('hey')
            },
            incAge:()=>{
                this.setState({
                    profile:{
                        ...this.state.profile,
                        age: this.state.profile.age + 1
                    }
                })
            }
        }}
      >
          {this.props.children}
      </MyContext.Provider>
    )
  }
}


export default ContextProvider;