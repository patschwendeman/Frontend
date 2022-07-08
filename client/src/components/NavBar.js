import "../style/FeedbackBar.css";

const NavBar = ({ handleContent }) => {
    return(
        <div className="NavBar">
            <button id="quiz" onClick={ () => handleContent('quiz') }>Quiz</button>
            <button id="deck" onClick={ () => handleContent('deck') }>Deck</button>
        </div>
        
    );
}

export { NavBar };