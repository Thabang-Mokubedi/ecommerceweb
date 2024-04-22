import React, { useState } from 'react';
import CardForm from './CardForm';
import CardList from './CardList';
import './Addpayment.css';

const Payment = () =>{
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    // If the new card is default, uncheck all others
    if (newCard.isDefault) {
      setCards(cards.map(card => ({ ...card, isDefault: false })));
    }
    setCards([...cards, newCard]);
  };

  const setDefaultCard = (index) => {
    setCards(cards.map((card, i) => ({
      ...card,
      isDefault: i === index,
    })));
  };

  return (
    <div>
      
      <CardList cards={cards} setDefaultCard={setDefaultCard} />
    
      <CardForm addCard={addCard} />
    </div>
  );
}

export default Payment;