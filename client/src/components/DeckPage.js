import { useState } from "react";
import { Card } from "./Card";
import { AddCardPage } from "./AddCardPage";

const DeckPage = ({ cards, enterQuest, enterAnswer, handleEnterQuest, handleEnterAnswer, handleCreateCard }) => {

    const [showAddCardPage, setAddCardPage] = useState(false);

    const handleShowAddCardPage = (e) => {
        if(showAddCardPage === true) setAddCardPage(false)
        if(showAddCardPage === false) setAddCardPage(true)
    }

    return(
        <div className="Deck">
            <AddCardPage 
                showAddCardPage= { showAddCardPage } 
                enterQuest= { enterQuest }
                enterAnswer= { enterAnswer }
                handleEnterQuest= { handleEnterQuest }
                handleEnterAnswer= { handleEnterAnswer }
                handleCreateCard= { handleCreateCard }
            />
            {cards.map((element, index) => {
              return(
               <div 
                  className="col"
                  key={ cards[index]._id }
                >
                   <Card 
                      currentCard = { cards[index] }
                      type = { "deck" }
                  /> 
               </div>
              );
            })}
            <button id="add"  onClick={ () => handleShowAddCardPage(true) }><img src="../assets/plus.svg"/></button> 
        </div>
    );
}

export { DeckPage };