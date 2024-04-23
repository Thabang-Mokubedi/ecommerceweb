import React, { useState } from 'react';
import './Addpayment.css';
import { Link } from 'react-router-dom';
import './payment.css';

const CardForm = ({ addCard }) => {
  const [cardDetails, setCardDetails] = useState({
    cardHolder: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
    isDefault: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCard(cardDetails);
    setCardDetails({
      cardHolder: '',
      cardNumber: '',
      expiryDate: '',
      cvc: '',
      isDefault: false,
    }); // Reset form
  };

  return (
    <div className='newcard-div'>
    <div className="cardcontainer">
      <form onSubmit={handleSubmit}>
        <header className='newCard'>Add A New Card</header>
        {/* Inputs for cardHolder, cardNumber, expiryDate, cvc */}
        <div className="mb-3">

          <div className='input-div'>
            <label htmlFor="cardHolder" className="form-label">Cardholder Name</label><br></br>
            <input
              type="text"
              className="form-control"
              placeholder="John Maker"
              id="cardHolder"
              name="cardHolder"
              value={cardDetails.cardHolder}
              onChange={handleChange}
            />
          </div>

          <div className='input-div'>
            <label htmlFor="cardNumber" className="form-label">Card Number</label><br></br>
            <input
              type="number"
              className="form-control"
              placeholder="5126-5987-2214-7621"
              id="cardNumber"
              name="cardNumber"
              value={cardDetails.cardNumber}
              onChange={handleChange}
            />
          </div>

          <div className='input-div'>
            <label htmlFor="expiryDate" className="form-label">Expiry Date</label><br></br>
            <input
              type="text"
              className="form-control"
              placeholder="MM/YYYY"
              id="expiryDate"
              name="expiryDate"
              value={cardDetails.expiryDate}
              onChange={handleChange}
            />
          </div>

          <div className='input-div'>
            <label id='form-label' htmlFor="cvc" className="form-label">CVC</label><br></br>
            <input
              type="number"
              className="form-control"
              placeholder="123"
              id="cvc"
              name="cvc"
              value={cardDetails.cvc}
              onChange={handleChange}
            />
          </div>
          <div className='input-div'>
            <input
              type="checkbox"
              id="defaultCheckbox"
              className="form-check-input default"
              name="isDefault"
              checked={cardDetails.isDefault}
              onChange={handleChange}
            />
            <label htmlFor="defaultCheckbox" className="form-check-label default">Save this as your default payment method</label>

          </div>
        </div>
        <div className="cta">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4e303d761588a5262ba05adb37e3648464be83a3bdb74ddfdd37441f3c339ec2?" alt="" />
          <button type="submit" className="address">Add Payment Method</button>
        </div>
        <div className="information">
          <Link to="/checkout" type="button" className="bttnback">Back</Link>
          <div className="secure-connection">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2b633c7b8fdad75937bd1a00ec582b64a9b9ab9326e9f0a139cee7f42d1c1e?" alt="" />
            <div className="btn-secure">Secure Connection</div>
          </div>
        </div>
      </form>
    </div></div>
  );
}

export default CardForm;
