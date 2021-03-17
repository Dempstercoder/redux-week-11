const Winner = ({winner}) => (
winner !== 0 ? <h2 className="alert alert-success">Player { winner } wins!</h2> : null
/* if winner is not 0 then h2 will show otherwise null. */
)

export default Winner;