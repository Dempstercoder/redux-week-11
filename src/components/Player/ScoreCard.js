const ScoreCard = ({handleIncrement, player, score, serving}) => {

    let color = "card text-center " + (serving === player ? "bg-dark text-white" : "")

    /* scores */
console.log(serving);
console.log(score);
    return (
                <div className="col-md-6 mt-4">
                    <div className={ color }>
                        <h5 className="card-header">Player { player }</h5> 
                        <div className="card-body">
                            <p className="card-text display-1">{ score }</p>
                        </div>
                        <div className="card-footer">
                            <button className="form-control btn btn-success" 
                                    onClick={ handleIncrement }>+</button>
                        </div>
                    </div>
                </div> 
    )
}

export default ScoreCard;