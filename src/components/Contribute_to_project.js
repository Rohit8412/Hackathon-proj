import React from 'react'
import Card from './Contribute_card'
import '../Styles/contribute_container.css'

import {dataContri} from './data_contri'
function App()
{
    return (
      <>
        <div id="sab">
          <h1 id="project-heading">PROJECTS </h1>
          <div className='android-head'>Android Development</div>
          <div className='contri_container'>
            {
            dataContri.ar.map((item,index)=>{
              //const {id,src,title,desc}=item
              if(index<2)return(
              <Card key={item.id} obj={item} />
              )
            })
          }
          </div>
          <div className='web-head'>Web Development</div><br/>
          <div className='contri_container'>
          {
            dataContri.ar.map((item,index)=>{
              //const {id,src,title,desc}=item
              if(index>2 && index<=4)return(
              <Card key={item.id} obj={item} />
              )
            })
          }
          </div>
          <div className='mi-head'>MI/AL</div><br/>
          <div className='contri_container'>
          {
            dataContri.ar.map((item,index)=>{
              //const {id,src,title,desc}=item
              if(index>2 && index<=4)return(
              <Card key={item.id} obj={item} />
              )
            })
          }
          </div>
        </div>
      </>
    )
  
}

export default App