
import mobilePic from './images/mobile.png'
import qrcode from './images/qr-code.png'
import './shop.css'
function Shop() {
    return (
            <div className = "div_style">
            <div className="image_style">
             <img src={mobilePic} alt=""></img>
             </div>
             <div className="componet_style">
              <div>
              <h1>Shop Now ,<br/>Pay Later</h1>
              <h5>Our flexible options allow you to choose <br/>between paying after delivery or paying in <br/> over 3,4 or 6 monthly instalments.</h5>
              <h3>Don't forget to download the app!</h3>
              </div>
              <div className="qr_div_style">
              <img className ="qr_image"src={qrcode}></img>
              <h5>scan the QR code <br/> and download the <br/>app to enjoy our <br/> exclusive shopping <br/>experiences!</h5>
              </div>
             </div>
            </div>
    )
    }
    
    export default Shop;