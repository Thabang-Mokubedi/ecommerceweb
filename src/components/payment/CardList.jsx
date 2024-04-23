import React from 'react';
import './Addpayment.css';
import { CreditCard } from 'phosphor-react';
import './payment.css';

const CardList = ({ cards, setDefaultCard }) =>{
  return (
    <div className='cardlistdiv'>
      <div className="payment">
        <header className='selectCard' style={{color: "black"}}>SELECT A CARD</header>
      
      {cards.map((card, index) => (
        
        <div key={index} >
          <input
          id='check'
            type="checkbox"
            className="form-check-input"
            checked={card.isDefault}
            onChange={() => setDefaultCard(index)}
          />  <CreditCard id='cardicon' size={30} /> &nbsp; &nbsp;Mastercard ending in {card.cardNumber.slice(-4)}
        
        </div>
      ))}
      </div>
    </div>
  );
}


export default CardList;