import "./paymentmethod.css";
import { Link } from 'react-router-dom';


export const PaymentMethod = () => {


    return (
        <div>

<div className="paymentmethod-div">
        <div className="paymentmethod-heading">Payment Method</div>

        <div className="paymentmethodDiv">
          <div className="payment-method-Div">
            
            <div className="paymentmethod-subdiv">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3b762e84441ac0eb71e8c344a90eb8d5fa370c225c3fe301cd5d740a11b653cd?"
                className="Image-Icons"
              />
              
              <div>
                Mastercard{" "}
                <span >ending in </span>
              </div>
            </div>
            
            <div className="paymentmethod-subdiv">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9addc8a79072e0ab8efbad48d4342793a1734367ff69c5124fc729a39ab55025?"
                className="Image-Icons"
              />
              <div>
                $ 53.21{" "}
                <span>gift card balance</span>
              </div>
            </div>

            <div className="paymentmethod-subdiv">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/69c341721026c2e99258ea568eaae524e098f07b6301b4d16d2c63b44bfc52ff?"
                className="Image-Icons"
              />
              <div>
                Billing address same as Shipping Address
              </div>
            </div>
          </div>

          <Link to="/payment"><div className="change-btn">Change</div></Link>

        </div>
      </div>

      <div className="paymentmethod-div">
      <div className="paymentmethod-heading">REVIEW YOUR BAG</div>
      </div>

        </div>
    );
};
