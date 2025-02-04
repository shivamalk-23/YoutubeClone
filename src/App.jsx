
import React from 'react'
import Navbar from './components/Navbar'
import FeedBar from './components/FeedBar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import { Box, Button } from '@mui/material'
import VideoDisplay from './components/VideoDisplay'
import SearchFeed from './components/SearchFeed'

const App = () => {
  const [theme, setTheme] = React.useState(false)
  



  function toggleTheme(){
    setTheme(prev=>{return !prev})
  }
  return (
    <div   id='style-1' >

          <BrowserRouter>


          <Navbar toggleTheme={toggleTheme}  theme={theme}/> 
           <Box sx={{display: 'flex',flexDirection:{xs:'column',lg:'row'} }}>
          <FeedBar theme={theme} />
           
          <Box sx={{ backgroundColor:theme?'#f9f9f9':'#181818',color:theme?'black':'white',py:3 }}  >
          <Routes  >
            
              <Route path='/' element={<Home theme={theme} />}   />
              <Route path='/search' element={<SearchFeed theme={theme} />} />
              <Route path='/video/:id' element={<VideoDisplay theme={theme}  />} />

            </Routes>
            
          </Box>
        </Box>
      </BrowserRouter>





    </div >
  )
}

export default App
