import React from 'react'
import { Box } from '@mui/material'
const Error = () => {
  return (
    <Box sx ={{display:'flex',justifyContent:'center',alignItems:'center',height:'70vh',flexDirection:'column'}}> 
        <h1 className='highlight'>ERROR</h1>
        <h2>Sorry we couldn&apos;t fetch your video</h2>
        <p>Try some other time <span className='highlight'>: (</span></p>
    </Box>
  )
}

export default Error
