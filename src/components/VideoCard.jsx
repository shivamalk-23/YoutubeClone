/* eslint-disable react/prop-types */
import { Card, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

const VideoCardElement = ({ detail,theme }) => {


  return (
    <Box sx={{color:theme?'black':'white',m:{xs:0.2,sm:0.5} }} >
      
      <Link style={{ textDecoration: 'none',color:theme?'black':'white'  }} to={`/video/${detail.videoId}`}>
      
        <Box sx={{display: 'flex', flexDirection: { xs: 'row', md: 'column' },}}>
          <img src={detail.thumbnail[0].url} alt="" style={{minWidth:'140px',width:'30vw',height:'fluid', borderRadius: '15px', maxWidth: '360px', margin: '2px 0px' }} />

          <Box sx={{ m: 1 }}>
            <h4>{detail.title.length > 30 ? detail.title.slice(0, 35) + '...' : detail.title}</h4>

            <Box>
              <p>Views: {detail.viewCount ? detail.viewCount: 'None'}</p>
              <p>{detail?.isLive && 'LIVE'}</p>
              <p>{!(detail?.isLive) && detail?.publishedTimeText}</p>
            </Box>
          </Box>
        </Box>
      </Link>

    </Box>
  )
}

export default VideoCardElement
