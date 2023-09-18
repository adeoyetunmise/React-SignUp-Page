import React from 'react'
import {Link,Routes,Route} from "react-router-dom"
import Short from './Short'

const Feed = () => {
  return (
   <>
    <nav>
        <Link to='/feed/short'>Short</Link>
    </nav>

    <Routes>
    <Route path = '/short' element={<Short/>}/>
    </Routes>
    
    </>
  )
}

export default Feed