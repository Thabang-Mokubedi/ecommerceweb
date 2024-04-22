import React from 'react';
import './Addpayment.css';
import { CreditCard } from 'phosphor-react';

const CardList = ({ cards, setDefaultCard }) =>{
  return (
    <div>
      <div className="payment">
        <header className='selectCard'>SELECT A CARD</header>
      
      {cards.map((card, index) => (
        <div key={index}>
          <input
            type="checkbox"
            className="form-check-input"
            checked={card.isDefault}
            onChange={() => setDefaultCard(index)}
          />  <CreditCard size={32} /> &nbsp; &nbsp;Mastercard ending in {card.cardNumber.slice(-4)}
        </div>
      ))}
      </div>
    </div>
  );
}


export default CardList;