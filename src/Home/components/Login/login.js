import "./login.css";
import { useHistory } from "react-router-dom";
import logo from './images/logo.svg';
function Login() {

const history = useHistory();
const onLogin = () => {
        console.log("clicked");
        history.push("/signIn");
}        
return (
        <div className = "login_style">
           <div className="header_style">
            <img src={logo}></img>
            <span className="span_1">Splintr</span>
            <span >Splintr for business</span>
            <span>How it works</span>
            <span>Splintr Stories</span>
            <button className="button1">Get the app</button>
            <button className="button2" onClick={onLogin}>Login</button>
            </div>
            <div className="h1_style">
            <h1 style={{fontSize: '4rem'}}>Buy Now, <br></br> Pay Later.    </h1>
            <h4>Choose Splitr at checkout and pay for your purchase<br></br>over three installments without paying any  interest and <br></br>get your order  straight away.</h4>
           </div>
        </div>
)
}

export default Login;