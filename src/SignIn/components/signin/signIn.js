import { withRouter } from "react-router-dom";
import TopContainer from '../main/topSection'
import styled from 'styled-components'
import FooterLow from '../../../Home/components/Footer/footerLow'
import './signIn.css';

function SignIn() {


    return (
      <div className="page_container">
      <TopContainer/>
      <FooterLow/>
      </div>
      
    );
  }
  export default withRouter(SignIn);