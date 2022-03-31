import React from "react";
import logo from '../../../assets/img/q.svg'
import menu from "../../../assets/img/menu.svg";

import './navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <object data={logo} type="image/svg+xml" width="40" height="40"></object>
      </div>
      <div className="navigation_menu">
        <div className="menu_wrap">
          <div className="menu_el" onClick={() => {alert("go to new page")}}></div>
          <div className="menu_el" onClick={() => {alert("go to popular page")}}></div>
          <div className="menu_el" onClick={() => {alert("go to etc page")}}></div>  
        </div>        
      </div>
      <div className="endless">
        <div className="endless_el">

        </div>
        <div className="endless_el">
          {/* <object data={menu} type="image/svg+xml" width="40" height="40"></object> */}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
