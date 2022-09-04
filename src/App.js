import { Routes,Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Main from './components/Main';
import Nav from './components/Nav';
import Contribute from './components/Contribute_to_project'
import Contricard from './components/Contribute_card'
// import Discussions from './components/newsCard';
import CommentBox from './components/Commentbox';
import Community from './components/Community';
import Workcard from './components/Workshop_card'
import Workshopcontain from './components/Workshop_container'
import { dataContri } from './components/data_contri'
import Carousel from './Carousel'
import {data} from './components/data_workshop'
import Carouselboth from './CarouselBoth';
{/* <Contricard
                obj={{
                  src: 'https://lh3.googleusercontent.com/4MKDUPRidEZ7TQ9EIxeGAAm-DYkSWt04DkuJgajum7GogsRqJe63_yNEoLKDe5wMhon6scAHlPEu4r2O4kBNd3locxU-jD3sXezm3_dKkQY',
                  title: '52°North GmbH',
                  desc: ' 52°North works on innovative ideas and technologies in geoinformatics',
                }}
              /> */}


function App() {
  return (
    <div className='App'>
      <Nav />
      <Intro />
      <div className='center-card'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <div className='Appi'>
                <Main/>
                <Carouselboth/>
              </div>
            }
          />
          <Route exact path='/workshop' element={<Workshopcontain />} />
          <Route exact path='/project' element={<Contribute />} />
          <Route exact path='/discussions' element={<CommentBox className="comment"/>} />
          <Route exact path='/community' element={<Community />} />
        </Routes>
        <Footer className="main-footer"/> 
      </div>
    </div>
  )
}

export default App;
