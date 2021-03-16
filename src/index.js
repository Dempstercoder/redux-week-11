import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';


const initialState = {
  player1: 0,
  player2: 0,
};

// const changeReducer = (currentState, action) => {
//   return 
// }

const reducer = (state, action) => {
  switch (action.type){
    case "INCREMENTPLAYER1" : return { ...state, player1: state.player1 + 1 };
    case "INCREMENTPLAYER2" : return { ...state, player2: state.player2 + 1 };
    case "RESET" : return initialState; // had { initialState } before,
    //did not reset, showed NaN for text on browser. This does not need to be in Js land as it is just using the variable from above to return the state.
    default: return state;
  }
};

const store = createStore(
  reducer, 
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const render = () => {
  let state = store.getState();

ReactDOM.render(
  <React.StrictMode>
        {/* we update subscribe to call the ReactDOM.render
        method whenever the state changes */}
        <App 
        player1 = { state.player1 }
        handleIncrementPlayer1={ () => store.dispatch({ type: "INCREMENTPLAYER1" })} 
        player2 = {state.player2} 
        handleIncrementPlayer2={ () => store.dispatch({ type: "INCREMENTPLAYER2" })}
        handleReset={ () => store.dispatch({ type: "RESET" })}
        />
  </React.StrictMode>,
  document.getElementById('root')
  );
};


store.subscribe(render); /* render when state changes */


// Why don't we need to dispatch the action? We are not using subscribe with actions, so don't really need the dispatch.
// store.dispatch({ type: "INCREMENTPLAYER1" });
// store.dispatch({ type: "INCREMENTPLAYER2" });
// store.dispatch({ type: "RESET" });


render(); /*render when page loads using initial state */

/* // If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals */
reportWebVitals();


// dispatch, dispatches an action
// createStore is the Redux part of it all
//