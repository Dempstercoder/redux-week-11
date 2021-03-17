import initialState from '../data/initial';



const server = (state) => { //state is an object 
  let total = state.player1 + state.player2
    return {
      ...state, 
      serving: Math.floor(total / 5) % 2 === 0 ? 1 : 2 // math.floor rounds a number down. If the total is divided by 5 and 2 left over which equals to 0, then player1 serves, if not then player2 serves.
    }
}

// const changeReducer = (currentState, action) => {
//   return 
// }


const incrementPlayer1 = (state) => { // accepts state object
  return {  
    ...state, // copying the state object (...state), then accessing the property within (player1) and then changing the state by using state.player1 and adding 1.
    player1: state.player1 + 1 
  }
}

const incrementPlayer2 = (state) => { // accepts state object
  return { 
    ...state, 
    player2: state.player2 + 1 
  }
}

const isThereAWinner = (state) => {
  return state.player1 >= 21 || state.player2 >= 21 // returns true or false
}

const whoWins = (state) => {
  return {
    ...state,
    winner: isThereAWinner(state) ? (state.player1 > state.player2 ? 1 : 2) : 0 // ternary inside a ternary. If there is a winner, then compare scores (if player1s score is bigger than 2) then there is a winner. If its false then goes straight to 0, no winner. Sets winner property to 0.
  }
}


const reducer = (state, action) => {
  switch (action.type){
    case "INCREMENTPLAYER1" : return whoWins(server(incrementPlayer1(state))); // the function incrementPlayer1 grabs the state and then 
    case "INCREMENTPLAYER2" : return whoWins(server(incrementPlayer2(state)));
    case "RESET" : return initialState; // had { initialState } before,
    //did not reset, showed NaN for text on browser. This does not need to be in Js land as it is just using the variable from above to return the state.
    default: return state;
  }
};




export default reducer;

