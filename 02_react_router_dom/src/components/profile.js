import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Profile = (props) => {

    console.log(props)

    const redirectuser = () => {

        props.history.push('/')

        // const userRedirect = false;

        // if(userRedirect){
        //     return (
        //         <Redirect to="/"/>
        //     )
        // }
    }



    return(
        <>
            <button onClick={()=> redirectuser()}>
                Redirect
            </button>
        
            <Link to={{
                pathname:`${props.match.url}/posts`
            }}>go to Posts </Link>
        </>
    )
}

export default Profile;