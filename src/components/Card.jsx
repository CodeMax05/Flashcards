const Card = ({ question, answer, isFlipped, onClick }) => {
    return(
        <div className="card-container" onClick={onClick}>
            <div className={`card-inner ${isFlipped ? 'flipped' : ''}`}>
                <div className="card-front">
                    <h4>{question}</h4>
                </div>
                <div className="card-back">
                    <h4>{answer}</h4>
                </div>
            </div>
        </div>
    )
}

export default Card;
