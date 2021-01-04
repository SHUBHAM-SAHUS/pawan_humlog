import React from "react";

import App from "../App.js";
import logo from "assets/images/logob.png";
import facebook from "assets/images/face.png";
import google from "assets/images/google.png";
import { Header } from "components/commoncomponent/header/Header.js";
import {HeadFooter} from "components/commoncomponent/footer/HeadFooter.js"



export const PublicRouterLayout = ({ children }) => (
  // <div className="main_login">

  // <div className="row  no-gutters" >

  //     <div className=" col-12 col-lg-4   p-0  rb">

  //       <div className=" login_aa ">

  //            <div className="d-flex justify-content-center ">
  //            <img src={logo} width="50%" alt="logo"/>
  //          </div>

  //             <div className="d-flex justify-content-center mt-3">
  //             <h2 className="logo_bb">हिन्दी/<strong className="logo_cc">English</strong></h2>
  //             </div>
  //                <div className="d-flex  justify-content-between px-3 mt-2 justify-content-center">

  //                   <button className="btn_a mr-1"> Member </button>
  //                   <button className="btn_b  ml-1"> Employer </button>
  //                  </div>

  <>
    <Header />
    {children}
   <HeadFooter/>
    
       
  </>

  //        </div>

  //          </div>
  //  </div>
  // </div>
);

export const PrivateRouterLayout = ({ children }) => <App>{children}</App>;
