import React from 'react'
import Card from './Workshop_card'
import '../Styles/workshop_container.css'

import { data } from './data_workshop'

function App() {
  
  return (
    <>
      <center>
      <h1 id="heading">Workshops</h1>
        <div className='work_container'>
          {data.map((item, index) => {
            //const {id,src,title,desc}=item
            return <Card key={item.id} obj={item} />
          })}
        </div>
      </center>
    </>
  )
}

export default App
