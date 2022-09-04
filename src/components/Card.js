import React from 'react';
import '../Styles/Card.css'
import { Link } from "react-router-dom";
function Card(props) {
  return <div className="Card-container">
     <header>
                <h1>{props.title}</h1>
              </header>
              <div>
                <img src={props.src} className="post-img" />
              </div>
              <p>
              {props.text}
              </p>
              <div className="know-container">
             
                <Link to="/"
                 className="know"> 
                  Know More
                 </Link> 
              </div>
  </div>;
}

export default Card;
