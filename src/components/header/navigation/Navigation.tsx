import React from "react";
import logo from '../../../assets/img/q.svg'

import './navigation.css';

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="logo">
        <object data={logo} type="image/svg+xml" width="40" height="40"></object>
      </div>
      <div className="navigation_menu">
        <div className="menu_wrap">
          <div className="menu_el"></div>
          <div className="menu_el"></div>
          <div className="menu_el"></div>  
        </div>        
      </div>
      <div className="endless">
        <div className="endless_el">

        </div>
        <div className="endless_el">
          
        </div>
      </div>
    </div>
  );
};

export default Navigation;
