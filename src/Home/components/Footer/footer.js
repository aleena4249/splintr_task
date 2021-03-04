import './footer.css'
import FooterLow from './footerLow'


function Footer() {
    return (
        <div>
            <div className="footer_style">
                 <div className="content_style">
                <h1>Calling Out all merchants! </h1>
                <h3>We're partnering retailers like you!</h3>
                <h5>Team up with us to go give you customers a btter way to pay. Shoppers love the flexibility
                <br/>and confidence that our solutions give them and our integration options make it easy for
                <br/>you to add Splitrto your checkout </h5>
                <button className="button_style">Learn More</button>
                </div>
            </div>
            <FooterLow/>
       </div>
    )
    }
    
    export default Footer;