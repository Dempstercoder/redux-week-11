import logo from './logo.svg';
import './App.css';

const App = ({player1, player2, handleIncrementPlayer1, handleIncrementPlayer2, handleReset, serving}) => (
  <>
      {/* header */}
      <header className="jumbotron mt-4 mb-0">
          <h1>PingPong</h1>
      </header>

      {/* scores */}
      <div className="row mb-4">
          <div className="col-md-6 mt-4">
              <div className={"card text-center " + (serving === 1 ? "bg-dark text-white" : "")}>
                  <h5 className="card-header">Player 1</h5> 
                  <div className="card-body">
                      <p className="card-text display-1">{ player1 }</p>
                  </div>
                  <div className="card-footer">
                      <button className="form-control btn btn-success" 
                              onClick={ handleIncrementPlayer1 }>+</button>
                  </div>
              </div>
          </div>

          <div className="col-md-6 mt-4">
          <div className={"card text-center " + (serving === 2 ? "bg-dark text-white" : "")}>
                  <h5 className="card-header">Player 2</h5>
                  <div className="card-body">
                      <p className="card-text display-1">{ player2 }</p>
                  </div>
                  <div className="card-footer">
                      <button className="form-control btn btn-success"
                              onClick={ handleIncrementPlayer2 }>+</button>
                  </div>
              </div>
          </div>
      </div>

      { /* winner message */}
      <h2 className="alert alert-success">Player {/* winning player here */} wins!</h2>

      <hr />

      { /* reset button */}
      <button className="btn btn-danger"
              onClick={ handleReset }>Reset</button>
  </>
);

export default App;

// serving === 1 along with the object set at 1 on index.js makes the first player to start be the player1.