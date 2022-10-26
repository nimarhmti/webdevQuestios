import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import Wrapper from "../UI/wrapper";

export default function Navbar() {
  return (
    <div className="NavSection">
      <Wrapper>
        <ul className="NavList">
          <NavLink to="/poems" className="NavItem">
            <li>فال حافظ</li>
          </NavLink>
          <NavLink to="validation" className="NavItem">
            <li>اعتبار سنجی</li>
          </NavLink>
          <NavLink to="exchange" className="NavItem">
            <li>تبدیل ارز</li>
          </NavLink>
          <NavLink to="exam" className="NavItem">
            <li>امتحان</li>
          </NavLink>
          <NavLink to="/carprice" className="NavItem">
            <li>قیمت خودرو</li>
          </NavLink>
          <NavLink to="/prayertimes" className="NavItem">
            <li>اوقات نماز</li>
          </NavLink>
          <NavLink to="/socialmedia" className="NavItem">
            <li>شبکه اجتماعی</li>
          </NavLink>
          <NavLink to="/Bank loans" className="NavItem">
            <li>وام بانکی</li>
          </NavLink>
        </ul>
      </Wrapper>
    </div>
  );
}
