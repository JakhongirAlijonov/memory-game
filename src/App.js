import './App.css'
import { useState ,useEffect } from 'react';
import SingleCard from './Components/SingleCard';

const cardImages = [
  { "src": "/img/helmet-1.png"  ,matched :false},
  { "src": "/img/potion-1.png" ,matched :false},
  { "src": "/img/ring-1.png" ,matched :false},
  { "src": "/img/scroll-1.png" ,matched :false},
  { "src": "/img/shield-1.png" ,matched :false},
  { "src": "/img/sword-1.png" ,matched :false},
]
function App() {

  const [cards ,setCards] = useState(null)
  const [turns ,setTurns]= useState(0)
  const [choiceOne , setChoiceOne] = useState(null)
  const [choiceTwo , setChoiceTwo] = useState(null)
  const [disabled , setDisabled] = useState(false)
// shuffle cards
const shuffleCard = ()=>{''
  const shuffledCards = [...cardImages, ...cardImages].sort(()=>Math.random()-0.5).map((card)=>{
    return {...card, id:Math.random()}
  })
  setCards(shuffledCards)
  setTurns(0)
}

const choiceCard = (card)=>{
choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
}

useEffect(()=>{
  if(choiceOne && choiceTwo ){
    setDisabled(true)
    if(choiceOne.src === choiceTwo.src){
      setCards((prevCards)=>{
        return prevCards.map((card)=>{
          if(card.src === choiceOne.src){
            return {...card , matched:true}
          }else return card;
        })
      })
      resetCards()
    }else {
      setTimeout(()=>{
        
        resetCards()
      }, 1000)
    }}
}, [choiceOne , choiceTwo])
const resetCards = ()=>{
  setChoiceOne(null)
  setChoiceTwo(null)
  setTurns((prevTurn)=>prevTurn +1)
  setDisabled(false)
}



  return (
    <div className="App">
      <h1>Magic Match</h1>
     <button onClick={shuffleCard}>New game</button>
     <h3>Your turns: {turns}</h3>
     <div className="card-grid">
       {cards && cards.map((card)=>{
         return <SingleCard card={card} choiceCard={choiceCard} key={card.id} disabled={disabled}   flipped={card===choiceOne || card===choiceTwo || card.matched}/>
       })}
     </div>
    </div>
  );
}

export default App