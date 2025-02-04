/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState } from "react"
import { getvideo } from "../utils/GetVideo"
import VideoCardElement from './VideoCard'
import { Box } from '@mui/material'


const Home = ({theme}) => {

  const [vids, setvids] = useState([])
  useEffect(() => {
    getvideo('home')
      .then(data => {
        console.log('Fetched data:', data); // Log the fetched data
        setvids(data);
      })
      .catch(error => {
        console.error('Error fetching videos:', error); // Log any errors
      });
  }, []);
  console.log('Videos state:', vids);
  
  return (vids.length !==0 ? (
    <Box id='style-1' sx={{ padding:{xs:0.6,},backgroundColor:theme?'#f9f9f9':'#181818',color:theme?'black':'white' }}   >
      <h2 className='title'>Recommended Videos For <span className="highlight">You</span></h2>
      <Box sx={{width:'80vw' ,flexWrap: 'wrap', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>

        {(vids?.map((each) => {
          return ((each.type === 'video') && <VideoCardElement key={each.videoId} theme={theme} detail={each} />)})
          )}

      </Box>
    </Box>
  ):<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh',width:'90vw' }}>
              Loading
          </Box>)
}

export default Home
