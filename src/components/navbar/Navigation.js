import React, {  useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
import ButtonTwo from "../button/ButtonTwo";



function Navigation() {

  const [isMobile, setIsMobile] = useState(false);


  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src="img-one-lease/home/LOGO.jpg" alt="logo du site" />
        </div>
        
        <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}> 
            <Link to="/" className="home">
              <li className="active" >Home</li>
            </Link>
            <Link to="/about" className="about">
              <li className="">A propos</li>
            </Link>
            <Link to="/lld" className="lld">
              <li>LLD</li>
            </Link>
            <Link to="/" className="serve">
              <li>Nos services</li>
            </Link>
            <Link to="/" className="av">
              <li>Nos avantages</li>
            </Link>
            <Link to="/team" className="team">
              <li>L'équipe</li>
            </Link>
            <Link to="/" className="fi">
              <li>Fiscalité</li>
            </Link>
            <Link to="/" className="res">
              <li>Restitution</li>
            </Link>
            <Link to="/" className="new">
              <li>New!</li>
            </Link>
            <Link to="/" className="btnnav"> 
              <ButtonTwo
              toto ='Accès clients'
              />
                
              
            </Link>
          </ul>
        <div className="mobile-menu-icon"
          onClick={()=> setIsMobile(!isMobile)}>
          {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
        </div>
        
      </nav>
    </header>
  );
}
export default Navigation;
  
