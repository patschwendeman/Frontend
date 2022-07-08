import { Card } from "./Card";
import { FeedbackBar } from "./FeedbackBar";
import "../style/App.css";

const QuizPage = ({ currentCard, handleNext }) => {
    return(
        <>
            <div className="card">
                <Card 
                    currentCard = { currentCard }
                    type= 'quiz'
                />       
            </div>
            < FeedbackBar handleNext={ handleNext } />
        </>
    );
}

export { QuizPage };