import React from 'react'
import Card from './components/Contribute_card'
import './Styles/contribute_container.css'

import {dataContri} from './data_contri'
function App()
{
    return (
      <>
        <center>
          <div className='contri_container'>
            {
            dataContri.ar.map((item,index)=>{
              //const {id,src,title,desc}=item
              return(
              <Card key={item.id} obj={item} />
              )
            })
          }
          </div>
        </center>
      </>
    )
  
}

export default App