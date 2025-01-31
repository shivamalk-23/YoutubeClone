
import React from 'react'
import Navbar from './components/Navbar'
import FeedBar from './components/FeedBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Error from './components/Error'
import { Box, Button } from '@mui/material'
import VideoDisplay from './components/VideoDisplay'
import SearchFeed from './components/SearchFeed'

const App = () => {
  const [theme, setTheme] = React.useState(false)
  



  function toggleTheme(){
    setTheme(prev=>{return !prev})
  }
  return (
    <div  >

          <BrowserRouter>


          <Navbar toggleTheme={toggleTheme}  theme={theme}/> 
           <Box sx={{ display: 'flex',flexDirection:{xs:'column',lg:'row'} }}>
          <FeedBar />
           
          <Box sx={{ width: '100%',padding:4,backgroundColor:theme?'#f9f9f9':'#181818',color:theme?'black':'white' }}  >
          <Routes  >
            {}
              <Route path='/' element={<Home theme={theme} />} errorElement={<Error/>}  />
              <Route path='/search' element={<SearchFeed theme={theme} errorElement={<Error/>}/>} />
              <Route path='/video/:id' element={<VideoDisplay theme={theme} errorElement={<Error/>} />} />

            </Routes>
            
          </Box>
        </Box>
      </BrowserRouter>





    </div >
  )
}

export default App
