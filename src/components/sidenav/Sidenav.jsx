import './sidenav.css';
import Icon1 from "../../assets/icons/icon1.png";
import Icon2 from "../../assets/icons/icon2.png";
import Icon3 from "../../assets/icons/icon3.png";
import Icon4 from "../../assets/icons/icon4.png";
import Icon5 from "../../assets/icons/icon5.png";
import { Link } from 'react-router-dom';

function Sidenav() {
  return (
    <div className='sidenav'>
      <ul>

        <Link to="/" >
          <img src={Icon1} className='icon' />
        </Link>

        <Link to="/" >
          <img src={Icon2} className='icon' />
        </Link>

        <Link to="/" >
          <img src={Icon3} className='bag-icon' />
        </Link>

        <Link to="/bag" >
          <img src={Icon4} className='icon' />
        </Link>

        <div className='exitIcon'>
          <Link to="/" >
            <img src={Icon5} className='icon' />
          </Link>
        </div>

      </ul>

    </div>
  );
}

export default Sidenav;