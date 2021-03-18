import ScoreCard from "./ScoreCard";
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        serving: state.serving,
        score: state.player1
    };
};

export default connect(mapStateToProps)(ScoreCard);

// Player.js  # the React component
// Player1.js  # mapStateToProps with Player 1 info
// Player2.js  # mapStateToProps with Player 2 info

// MapStateToProps stuff - this lets us directly connect with store 

