import React from "react";
 import "../style/common/tabs.scss";
 import{Tab,Tabs} from "react-bootstrap"
import { Applieduser } from "./Applieduser";
export const Tabpage=()=>{
    return(
        <>
          <div>
<div className="dash_tabs">

<Tabs defaultActiveKey="profile" className="d-flex justify-content-around dash-tab" >
           
           
  <Tab eventKey="home" title="Applied">
  
   <Applieduser/>
   <Applieduser/>
   <Applieduser/>
   <Applieduser/>
   <Applieduser/>
   <Applieduser/>
  </Tab>
  <Tab eventKey="profile" title="Shortlist">
  <Applieduser/>
  <Applieduser/>
  <Applieduser/>


  </Tab>

  <Tab eventKey="men" title="Selected">
  <Applieduser/>
  <Applieduser/>

  </Tab>
 
</Tabs>
</div>

     
        </div>
        </>
    );
}