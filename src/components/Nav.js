import React,{useState} from "react";

import { Link} from "react-router-dom";
import '../Styles/Nav.css'
import { GoogleLogin } from 'react-google-login';
function Nav() {
 
  const[name,SetName]=useState("");
  const[email,setEmail]=useState("");
  const[url,setUrl]=useState("");

  const responseGoogle = (response) => {
    setEmail(response.profileObj.email);
    SetName(response.profileObj.name);
    setUrl(response.profileObj.imageUrl);
    console.log(response);
  }
  const [showNav,setshowNav]=useState(false);
  return (
    <div className='Nav'>
      <div className={showNav ? 'mobile-view' : 'links'}>
        <div className='links-container'>
          <Link className='nav-links' to='/'>
            Home
          </Link>
        </div>
        <div className='links-container'>
          <Link className='nav-links' to='/project'>
            Projects
          </Link>
        </div>
        <div className='links-container'>
          <Link className='nav-links' to='/workshop'>
            Workshops
          </Link>
        </div>
        <div className='links-container'>
          <Link className='nav-links' to='/community'>
            Community
          </Link>
        </div>
        <div className='links-container'>
          <Link className='nav-links' to='/discussions'>
            Discussions
          </Link>
        </div>
        <div className='links-google nav-links'>
          <GoogleLogin
            clientId='527554971157-cplb78dq0e79egml1femru097ar8crr2.apps.googleusercontent.com'
            buttonText='Login'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
      <div className='bars'>
        <i
          className='fa fa-bars fa-2x'
          style={{color: 'white'}}
          onClick={() => {
            setshowNav(!showNav)
          }}
        ></i>
      </div>
    </div>
  )
}

export default Nav;
