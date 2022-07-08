import { ChangeEventHandler } from "react";
import "../style/AddCardPage.css";

const AddCardPage = ({ showAddCardPage, enterQuest, enterAnswer, handleEnterQuest, handleEnterAnswer, handleCreateCard }) => {
   if(showAddCardPage === true){
    return(
        <div className="AddCardPage">
            <div className="Form">
                <h2>Add new Card</h2>
                <div className="InputSection">
                    <p>Question:</p>

                    <input 
                        type="text"
                        value={ enterQuest }
                        onChange= { handleEnterQuest }
                    />
                    
                    <p>Answer:</p>

                    <input 
                        type="text"
                        value={enterAnswer}
                        onChange= { handleEnterAnswer }
                    />
                </div>
                
                <div className="ButtonSection">
                    <button onClick={ () => handleCreateCard()}>ADD</button>  
                    <button>Cancel</button> 
                </div>
                     
            </div>   
        </div>
    );
   }
}

export { AddCardPage };