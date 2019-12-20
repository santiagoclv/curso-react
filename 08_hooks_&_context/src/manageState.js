import React, {createContext, useContext, useReducer} from 'react';
import App from './App';

const initialState = {
    background: null,
    text: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'setBackground':
            return {
                ...state,
                background: action.background,
            };
        case 'setText':
            return {
                ...state,
                text: action.text
            };
        default:
            return state;
    }
};

// export it and use consumer for classes
export const StateContext = createContext();
// export it and use hook for functions
export const useStateValue = () => useContext(StateContext);

export const ContextContainer = (props) => {
    return (
        <StateContext.Provider value={useReducer(reducer, initialState)}>
            <App {...props} />
        </StateContext.Provider>
    );
}
