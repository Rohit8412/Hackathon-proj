import React from "react";
import "../Styles/Main.css";
import { Link } from "react-router-dom";
import Card from "./Card";
function Main() {
  return (
    <div id="main">
      <div className="head1">
        <span>Unite</span>
      </div>
      <div className="tagline">Join Create Progress</div>
      <div id="comeOnBoy">
        <img src="https://bit.ly/33Qjdi7" className="main-img" />
      </div>
      <div className="desc">
        <p>Unite will let you create, grow and enhance your skills.</p>
      </div>
      <div className="main-cards">
        <h1 className="main-heading">What We Provide ?</h1>
        <div className="posts">
          <div className="post1">
          <Card src="https://makeskill.in/wp-content/uploads/2020/01/workshops.jpg" title="Workshops" text="  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam." 
                />
          <Card src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" title="Projects" text="  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam."/></div>
          <div className="post1">
          <Card src="https://static.javatpoint.com/tutorial/group-discussion/images/group-discussion-tips.jpg" title="Discussions" text="  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam."/>
          <Card src="https://opencollective-production.s3-us-west-1.amazonaws.com/216d2c60-67e7-11e9-b984-89e2dc4d10f9.jpg" title="Community" text="  Donec eget ex magna. Interdum et malesuada fames ac ante ipsum
                primis in faucibus. Pellentesque venenatis dolor imperdiet dolor
                mattis sagittis magna etiam."/></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
