import React, { useState } from 'react';
import './ShippingAddress.css';
import { Link } from 'react-router-dom';

const ShippingAddress = () => {
    //state initialization for address component
    const [address, setAddress] = useState({
        //object with properties set to empty strings
        firstName: '',
        streetName: '',
        cityName: '',
        stateName: '',
        country: ''
    });


    //event handler arrow function updates any changes in the input fields
    const handleChange = (e) => {
        setAddress({ ...address, [e.target.name]: e.target.value });
    };

    //event handler arrow function, prevents default form submission behaviour and handle submit form which clears form upon submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(address); // Process form submission here
        //Clear form fields
        setAddress({
            firstName: '',
            streetName: '',
            cityName: '',
            stateName: '',
            countryName: ''
        });
    };

    return (
        <div className="card-container">
            <form onSubmit={handleSubmit} className='paymentform'>
                <div className="mb-3">
                    <div className='input-div'>
                        <label htmlFor="firstName" className="form-label" id='paymentform-label'>Shipping Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="John Maker"
                            id="firstName"
                            name="firstName"
                            value={address.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="streetName"  id='paymentform-label'> Street Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="123 Plae Grond Stret"
                            id="streetName"
                            name="streetName"
                            value={address.streetName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="cityName"  id='paymentform-label'>  City</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Vermont"
                            id="cityName"
                            name="cityName"
                            value={address.cityName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="stateName"  id='paymentform-label'>   State / Province</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="California"
                            id="stateName"
                            name="stateName"
                            value={address.stateName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-div'>
                        <label htmlFor="countryName"  id='paymentform-label'>  Country</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="United State of America"
                            id="countryName"
                            name="countryName"
                            value={address.countryName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-div'>
                        <input
                            type="checkbox"
                            className="form-check-input default "
                            id="defaultAddress"
                            name="defaultAddress"
                            value={address.defaultAddresss}
                            onChange={handleChange}
                        
                        />  <label htmlFor="defaultAddress"  className='form-check-label default'  id='paymentform-label'> Save this as your default address</label>
                    </div>
                    
                </div>
                <div className="cta">
                    <button type="submit" className="address" onClick={handleSubmit}>Add Address</button>
                </div>


                <div className="information">
                <Link to="/checkout" type="button" className="bttnback">Back</Link>
                    <div className="secure-connection">
                        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ca2b633c7b8fdad75937bd1a00ec582b64a9b9ab9326e9f0a139cee7f42d1c1e?" alt="" />
                        <div className="btn-secure">Secure Connection</div>
                    </div>


                </div>

            </form>

        </div>
    );
}

export default ShippingAddress;
