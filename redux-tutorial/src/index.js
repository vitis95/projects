import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';

function reducer(state, action) { // 2. create function reducer // 5. update the store - reducer
    if(action.type === 'changeState'){
        return action.payload.newState;
    }
    return 'State';
}

const store = createStore(reducer); // 1. create the store
 
console.log(store.getState()); // 3. console store 

const action = { // 3. action declaration
    type: 'changeState',
    payload: {
        newState: 'New state'
    }
}

////// CIAONE 

store.dispatch(action); // 4. dispatch an action

console.log(store.getState()) // 6. stampa






ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
