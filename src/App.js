import './App.css';
import Button from './components/Button';
import Winner from './components/Winner';
import ScoreCard from './components/ScoreCard';

const App = ({player1, player2, handleIncrementPlayer1, handleIncrementPlayer2, handleReset, serving, winner}) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PingPong</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
      <ScoreCard 
        serving={ serving === 1 }
        handleIncrement={ handleIncrementPlayer1 }
        score = { player1 }
        playerTitle = "Player 1"
        />
        
      <ScoreCard 
        serving={ serving === 2 }
        handleIncrement={ handleIncrementPlayer2 }
        score = { player2 }
        playerTitle = "Player 2"
        />
        </div>
          

      { /* winner message */}
    <Winner winner={winner} /> 

      { /* reset button */}
    <Button handleReset={handleReset} />
  </>
);

export default App;

