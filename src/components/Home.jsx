/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState } from "react"
import { getvideo } from "../utils/GetVideo"
import VideoCardElement from './VideoCard'
import { Box } from '@mui/material'
import Error from './Error'

const Home = ({theme}) => {

  useEffect(() => {
    getvideo('home').
      then(data => setvids(data))
  }, [])

  const [vids, setvids] = useState([])
  console.log(vids)
  return (vids.length ===0 ? (
    <Box sx={{ width: '100%',padding:4,backgroundColor:theme?'#f9f9f9':'#181818',color:theme?'black':'white' }}   >
      <h2 className='title'>Recommender Videos For <span className="highlight">You</span></h2>
      <Box sx={{ flexWrap: 'wrap', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>

        {(vids?.map((each) => {
          return ((each.type === 'video') && <VideoCardElement key={each.videoId} theme={theme} detail={each} />)})
          )}

      </Box>
    </Box>
  ):<Error/>)
}

export default Home
