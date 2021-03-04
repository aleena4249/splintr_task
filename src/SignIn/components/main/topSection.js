import React ,{ useState  } from 'react';
import signInImage from './Images/Splintr_SignIn.png';
import logo from './Images/logo.svg';
import '../../components/signin/signIn.css'

export default function TopSection(){

  const [email,setEmail] = useState('');
  const [phone,setPhone] = useState('');
  const [error, setError] = useState(false);

  const handleEmailChange = e => {
    const { value } = e.target;
    setEmail(value);
  };
  const handlePhoneChange = e => {
    const { value } = e.target;
    setPhone(value);
  };
  
  const handleSignIn = () => {
    console.log("deee");
    if (email){
      if (email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        setError(false);
      }
      else{
        setError(true);
      }
    }
  }
   return <div className="container_style">
            <div className="input_conatainer">
            <img src={logo} alt=""></img>
            <h1 className="header_style1">Sign In</h1>
            <input className="input_type_style" placeholder="Email" onChange={handleEmailChange}></input>
            {email && error && (
            <div className="error_div_style help-block">Email is required</div>
             )}
            <h3 className="text_style">Or</h3>
            <input className="input_type_style" placeholder="Phone Number" onChange={handlePhoneChange}></input>
            <button className="signIn_button" onClick={handleSignIn}>SIgn In</button>
            <span className="center_text_style">Message and data rates may apply <br/> By Proceeding, I accept Splintr and confirm that I have read Splintr's 
            <br/>Privacy Notice.<br/>This page is protected by reCAPTCHA. By continuing I confirm having <br/>
            read Google's Privacy Ploicy and accepted Googles Terms.</span>
            </div>
           <div className="image_container_section">
            <img className="signIn_image" src={signInImage}></img>
            </div>
          </div>
}