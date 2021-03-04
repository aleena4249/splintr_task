import splintrLogo from './images/splintr_logo.jpg'
import './footer.css'


function FooterLow() {
const linkArray = ['About Us','Careers','Privacy','Sell with Splintr','Payment Methods','Contact Us'];
const linkArray1 = ['Buy Now,Pay Later','Customer Service','Partners'];
 return (
    <div  className="footer1_style">
    <div className="logo_style">
        <img src={splintrLogo}></img>
   </div>
    <div className="item_style">
    {
        linkArray.map((item,index) => {
            return <li key={index+1}><a className="anchor_style" href="">{item}</a></li>
        })
    }
   </div>
   <div className="item_style">
    {
        linkArray1.map((item,index) => {
            return <li key={index+1}><a className="anchor_style" href="">{item}</a></li>
        })
    }
   </div>
</div>
 )

}

export default FooterLow;