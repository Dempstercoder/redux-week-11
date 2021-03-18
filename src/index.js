import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './data/store';
import { Provider } from "react-redux";


let state = store.getState();


ReactDOM.render(
  <React.StrictMode>
    <Provider store= { store }>
        
            <App player1 = { state.player1 }
                  handleIncrementPlayer1={ () => 
                    
                  store.dispatch({ type: "INCREMENTPLAYER1" })} 
                  player2 = {state.player2} 
                  
                  handleIncrementPlayer2={ () => 
                  store.dispatch({ type: "INCREMENTPLAYER2" })}
                  
                  handleReset={ () => store.dispatch({ type: "RESET" })}
                  
                  serving = { state.serving }
             />
        </Provider>
      </React.StrictMode>,
  document.getElementById('root')
  );







