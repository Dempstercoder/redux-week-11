import './App.css';
import Button from './components/Button';
import Winner from './components/Winner';
import Player1 from "./components/Player/Player1";
import Player2 from "./components/Player/Player2";
// import { connect } from "react-redux";


const App = ({handleIncrementPlayer1, handleIncrementPlayer2, handleReset, serving, winner}) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PingPong</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
      <Player1 
        handleIncrement={ handleIncrementPlayer1 }
        player = { 1 }
        />
        
      <Player2
        handleIncrement={ handleIncrementPlayer2 }
        player = { 2 }
        />
        </div>
          

      { /* winner message */}
    <Winner winner={winner} /> 

      { /* reset button */}
    <Button handleReset={handleReset} />
  </>
);

export default App;

