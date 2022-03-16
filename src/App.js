import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Home from './views/Home'
import AddCard from './views/AddCard'

function App() {

  const [ cards, uppdateCards ] = useState([]);


  function addCard(card){
    uppdateCards((oldCards) =>{
      oldCards.push(card)
      return oldCards;
    });
  }

  function removeCard(index){
    let removeCards = cards;
    removeCards.splice(index, 1);
    uppdateCards(removeCards)
  }


  // useEffect(() => {
  //   const saved = JSON.parse(localStorage.getItem("cards")
  //
  //     uppdateCards(JSON.parse(localStorage.getItem("cards")));
  //
  // }, []);
  //
  // useEffect(() => {
  //   localStorage.clear();
  //   localStorage.setItem("cards", JSON.stringify(cards));
  // }, [cards]);


  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Home cards={ cards } removeCard={ removeCard }/> } />
      <Route path="/AddCard" element={ <AddCard addCard={ addCard }/> } />
    </Routes>
    </div>
  );
}

export default App;
