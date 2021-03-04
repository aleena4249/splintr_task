import "./about.css";
import buylogo from './images/buy.png'
import cardlogo from './images/credit-card.png'
import dollarlogo from './images/dollar-coin.png'

function About() {
return (
        <div className = "container-style">
            <div className="image1">
            <img src={buylogo} alt=""></img>
             <h3>Buy whatever <br></br> you want</h3>
             <h5>Enjoy buying from whatever<br></br>store ypu'd likejust don't<br></br>forget to choose us at checkout!</h5>
             </div>
             <div>
             <img src={cardlogo} alt=""></img>
             <h3>No interest or <br></br> late payment feest</h3>
             <h5>Imagining paying whenver<br></br>you want without having to pay<br></br>interest fee or any extras?</h5>
             </div>
             <div>
             <img src={dollarlogo} alt=""></img>
             <h3>Pay in 3,4 or 6 <br></br> installments</h3>
             <h5>you can choose to pay how <br></br>you'd like with our intstallment<br></br>plans that go up to 6 months</h5>
             </div>
        </div>
)
}

export default About;