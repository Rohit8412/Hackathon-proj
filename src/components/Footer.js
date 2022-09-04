import React from 'react'
import '../Styles/Footer.css'
import {Link} from 'react-router-dom'

function Footer() {
    return (
      <div>
        <footer id='footer'>
          <div className='footer-left'>
            <form method='post' action='#'>
              <div className='fields'>
                <div className='field'>
                  <label htmlFor='name'>Name</label>
                  <br />
                  <input type='text' name='name' id='name' />
                </div>
                <div className='field'>
                  <label htmlFor='email'>Email</label>
                  <br />
                  <input type='text' name='email' id='email' />
                </div>
                <div className='field'>
                  <label htmlFor='message'>Message</label>
                  <br />
                  <textarea name='message' id='message' rows='3'></textarea>
                </div>
              </div>
              <ul className='actions'>
                <div className='send-container'>
                  <Link to='/' className='send'>
                    SEND
                  </Link>
                </div>
              </ul>
            </form>
          </div>
          <div className='footer-right'>
            <div className='right address'>
              <h3>Address</h3>
              <p style={{marginBottom:"20px"}}>
                1234 Somewhere Road #87257
             
                <br />
               
              </p>
            </div>
            <div className='right number'>
              <h3>Phone</h3>
              <p>(000) 000-0000</p>
            </div>
            <div className='right email'>
              <h3>Email</h3>
              <p>info@untitled.tld</p>
            </div>
            <div className='right social'>
              <div className='icons alt'>
                <div>
                  <i className='fab fa-twitter'></i>
                </div>
                <div>
                  <i className='fab fa-facebook-f'></i>
                </div>
                <div>
                  <i className='fab fa-github'></i>
                </div>
                <div>
                  <i className='fab fa-instagram'></i>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}

export default Footer
