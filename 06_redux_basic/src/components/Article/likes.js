import React from 'react';

const LikesCounter = ({likes,dislikes,addLike}) => (
    <div className="addlikes-wrapper">
        <h3>How do you feel about this.</h3>
        <div className="addlikes-container">
            <div 
                className="btn like"
                onClick={()=> addLike('ADD')}
            >
                <div className="hits">{likes}</div>
                <div className="icon">
                    <i className="fa fa-thumbs-up"></i>
                </div>
            </div>
            <div 
                className="btn dislike"
                onClick={()=> addLike('REMOVE')}
            >
                <div className="hits">{dislikes}</div>
                <div className="icon">
                    <i className="fa fa-thumbs-down"></i>
                </div>
            </div>
        </div>
    </div>
)

export default LikesCounter;