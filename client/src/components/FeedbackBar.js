import "../style/FeedbackBar.css";

const FeedbackBar = ({ handleNext }) => {
    return(
        <div className="FeedbackBar">
            <button id="wrong" onClick={ handleNext }>Wrong</button>
            <button id="correct" onClick={ handleNext }>Correct</button>
        </div>
    );
}

export { FeedbackBar };