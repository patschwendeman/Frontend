import { useState, useEffect } from "react";
import axios from 'axios';
import { v4 } from 'uuid';
import { NavBar } from "../components/NavBar";

import { QuizPage } from "../components/QuizPage";
import { DeckPage } from "../components/DeckPage";

import "../style/App.css";


//Endpoint where Server is hosting
const endpoint = 'http://localhost:8000';


//Mockdata for Development
let mock = [
  {
    "id":"1",
    "quest":"Test",
    "answer":"Test"
  }
];

function App() {

  //Hooks
  const [content, setContent] = useState('quiz');
  const [cards, setCards] = useState(mock);
  const [enterQuest, setEnterQuest] = useState('');
  const [enterAnswer, setEnterAnswer] = useState('');
  const [cardLength, setCardLength] = useState(0);
  const [cardCounter, setCardCounter] = useState(0);


  
  //Fetch Cards from DB
  const fetchCards = async() => {
    const { data, status } = await axios.get(endpoint + '/read');
    if(status > 199 && status < 300){
      setCards(data);
      setCardLength(data.length);      
    }
  }

  //Create new Card
  const handleCreateCard = async () => {


    const newCard = {
      _id: v4(),
      quest: enterQuest,
      answer: enterAnswer
    };

    const { status } = await axios.post(endpoint + '/add', newCard);

    if(status > 199 && status < 300){
      fetchCards();

    }
    setEnterQuest(''); 
    setEnterAnswer('');
  }

  const handleEnterQuest = (e) => {
    setEnterQuest(e.currentTarget.value)
  }
  const handleEnterAnswer = (e) => {
    setEnterAnswer(e.currentTarget.value)
  }

  //Change Content
  const handleContent = (e) =>{
    setContent(e)

  };



  //Show next Card
  const handleNext = () => {
    if(cardCounter === cardLength - 1){
      setCardCounter(0);
    }
    else {
      setCardCounter(cardCounter + 1);
    }
  }

  //Get cards when open app
  useEffect(() => {
    fetchCards();
  }, []);


  if(content === 'quiz') {
    return (
      <>
        <div className="App">
          < NavBar handleContent={ handleContent } />
          < QuizPage 
            currentCard = { cards[cardCounter] }
            handleNext={ handleNext }
          />
        </div>
      </>
    );
  };

  if(content === 'deck'){
    return (
      <>
        <div className="App">
          <NavBar handleContent={ handleContent } />
          <DeckPage 
            cards= { cards } 
            enterQuest= { enterQuest }
            enterAnswer= { enterAnswer }
            handleEnterQuest= { handleEnterQuest }
            handleEnterAnswer= { handleEnterAnswer }
            handleCreateCard= { handleCreateCard }
          />
        </div>
        
      </>
    );
  }  
}

export default App;
