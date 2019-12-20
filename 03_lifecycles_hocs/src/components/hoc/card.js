import React from 'react'

const style = {
    background:'lightgrey'
}

const Card = (props) => {
    return(
        <div style={style} className="card">
            {props.children}
        </div>
    )
}

export default Card;
