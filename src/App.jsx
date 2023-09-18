
import './App.css'
        // import Axious from './components/Axious'
        // import EventHandling from './components/EventHandling'


// import Hero from './components/Hero'
// import Mapping from './components/Mapping'
// import NavBar from './components/NavBar'
import {Routes, Route} from 'react-router-dom'
import About from './components/about'
import Feed from './components/Feed'
import NotFound from './components/NotFound'
import Library from './components/Library'
import Formik from './components/Formik'
// import Google from './components/Google'

function App() {
 

  return (
    <>
      {/* <NavBar/>
      <Hero/>
     
      {/* <Mapping/> */}
      {/* <EventHandling/> */}
      {/* <Axious/>
      <About/>
      <Feed/>
      <NotFound/>
      <Library/> */}
      {/* <Google/> */}
      
      
      <Routes>
        <Route path = '*' element ={<NotFound/>}/>
      <Route path ='/about/:id' element ={<About/>}/>
      <Route path = 'feed/*' element = {<Feed/>}/>
      <Route path = 'feed/library' element = {<Library/>}/>
      <Route path = 'formik' element = {<Formik/>}/>
      
      </Routes>
    </>
  )
}

export default App
