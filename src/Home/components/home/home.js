import Login from '../Login/login'
import About from '../About/about'
import Shop from '../Shop/shop'
import BestSeller from '../BestSeller/bestSeller'
import Footer from '../Footer/footer'
import { withRouter } from "react-router-dom";
import './home.css'
function Home() {
  return (
    <div className="home_style">
     <Login></Login>
     <About></About>
     <Shop></Shop>
     <BestSeller/>
     <Footer/>
    </div>
  );
}
export default withRouter(Home);
