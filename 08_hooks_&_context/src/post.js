import React,{ useEffect } from 'react';

const Post = ({item}) => {

    useEffect(()=>{
        console.log('post mounted/created');

        return () => {
            console.log('component exit')
        }
    },[])

    return(
        <div>
            <hr/>
            <div>Name: {item.name} </div>
            <div>Body: {item.body} </div>
        </div>
    )

}

export default Post;