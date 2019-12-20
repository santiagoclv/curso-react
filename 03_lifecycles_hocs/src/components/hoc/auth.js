import React from 'react'

const Auth = (props) => {
    const pass = 'password12';

    if(pass === 'password123'){
        return props.children
    } else {
        return <h3>Your are not auth</h3>
    }

}

export default Auth;
