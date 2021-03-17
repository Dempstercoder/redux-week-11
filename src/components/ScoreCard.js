const ScoreCard = ({handleIncrement, serving, score, playerTitle}) => {

    let color = "card text-center " + (serving ? "bg-dark text-white" : "")


    /* scores */

    return (
                <div className="col-md-6 mt-4">
                    <div className={ color }>
                        <h5 className="card-header">{ playerTitle }</h5> 
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