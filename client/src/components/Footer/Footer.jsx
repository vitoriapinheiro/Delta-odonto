import { useState, useEffect } from 'react';
import axios from 'axios';
import Logo_delta from '../Assets/Deltaodontologia-logo02.png'
import Heart from '../Assets/Heart.png'
import Logo_CITi from '../Assets/logo-citi-preta.png'
import Instagram_icon from '../Assets/Instagram_icon.svg'
import Phone_icon from '../Assets/Phone_icon.svg'

import './Footer.css';

function Footer() {
  const [footer, setFooter] = useState([]);

  const loadFooter = async () => {
    const res = await axios.get('http://localhost:3001/api/footers');
    setFooter(res.data);
  };

  useEffect(() => {
    loadFooter();
  }, []);

  return (
    <div className="footer">
      {footer?.map(({address, phone, instagram}) => (
        <div className="footer_section">
          <div className="footer_infos">
            <div className="contact_footer">
              <p>
                <img src={Phone_icon}/>
                {phone}
              </p>
              <p>
                <img src={Instagram_icon}/>
                <a href="https://instagram.com/">{instagram}</a>              
              </p>
              <p>Nos acompanhe nas redes sociais!</p>
            </div>                   
            <div className="adress_credits">
              <p>Endereço: {address}</p>
              <div className="credits">
                <p>Made with and </p>
                <img src={Heart}/>
                <p> by</p>
                <img src={Logo_CITi}/>
              </div>
            </div> 
          </div>
          <div className="logo_footer">
            <img src={Logo_delta}/>
          </div> 
        </div>
      ))}
    </div>
  );
}

export default Footer;
