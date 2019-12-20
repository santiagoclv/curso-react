import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import '../css/App.css';

function TransitionComp() {
    const [show, setShow] = useState(true);

    return (
        <>
            <Transition
                in={show}
                timeout={1000}
                onEnter={() => {
                    console.log('1 - ENTER')
                }}
                onEntering={() => {
                    console.log('2 - ENTERING')
                }}
                onEntered={() => {
                    console.log('3 - ENTERED')
                }}
                onExit={() => {
                    console.log('1 - EXIT')
                }}
                onExiting={() => {
                    console.log('2 - EXITING')
                }}
                onExited={() => {
                    console.log('3 - EXITED')
                }}
            >
                {state =>
                    <div className={`square square-${state}`}>
                        {`square square-${state}`}
                    </div>
                }
            </Transition>

            <div className="showDiv" onClick={() => setShow(!show)}>
                Show / Hide
                </div>
        </>

    )
}


export default TransitionComp;