import React, { useContext } from 'react'
import MyContext from '../context/context';

const CotextCard = () => {

    const context = useContext(MyContext)

    return (
        <div>

            <h3>Name:{context.profile.username}</h3>
            <h3>LastName:{context.profile.lastname}</h3>
            <h3>Age:{context.profile.age}</h3>
            <button onClick={() => context.hey()}>Alert</button>
            <button onClick={() => context.incAge()}>Add age</button>




            {/* <MyContext.Consumer>
                { (context) => (
                    <>
                        <h3>Name:{context.profile.username}</h3>
                        <h3>LastName:{context.profile.lastname}</h3>
                        <h3>Age:{context.profile.age}</h3>
                        <button onClick={ ()=> context.hey()}>Alert</button>
                        <button onClick={ ()=> context.incAge()}>Add age</button>
                    </>
                )}
            </MyContext.Consumer> */}



            {/* <h3>Name:{props.profile.username}</h3>
            <h3>LastName:{props.profile.lastname}</h3>
            <h3>Age:{props.profile.age}</h3> */}
        </div>
    )

}

export default CotextCard;
