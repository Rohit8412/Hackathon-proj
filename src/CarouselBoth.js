import React, { useEffect, useState } from 'react'
import Carousel from './Carousel'
import { data } from './components/data_workshop'
import { dataContri } from './components/data_contri'
import Workcard from './components/Workshop_card'
import Contricard from './components/Contribute_card'

function App()
{
    const [width, setWidth] =useState(window.innerWidth>800?'50%':'100%');
   
    useEffect(()=>{
       window.addEventListener('resize', updateWidth)
    },[])
     
     const updateWidth = () => {
       if (window.innerWidth<800)
       setWidth('100%');
       else
       setWidth('50%')
     }
    return (
      <>
      <h1 style={{textAlign:"center"}}>Projects</h1>
        <Carousel no={width == '50%' ? 2 : 1}>
          {dataContri.ar.map((item, index) => {
            //const {id,src,title,desc}=item
            return (
              <div
                key={item.id}
                className='carousl-item'
                style={{ width: width }}
              >
                <Contricard obj={item} width={'60%'} />
              </div>
            )
          })}
        </Carousel>
        <h1 style={{textAlign:"center"}}>Workshops</h1>
        <Carousel no={width == '50%' ? 2 : 1}>
          {data.map((item, index) => {
            //const {id,src,title,desc}=item
            return (
              <div
                key={item.id}
                className='carousl-item'
                style={{ width: width }}
              >
                <Workcard obj={item} width={'80%'} />
              </div>
            )
          })}
        </Carousel>
      </>
    )
}

export default App;