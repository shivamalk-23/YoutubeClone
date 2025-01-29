/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { getvideo } from '../utils/GetVideo';
import { Box } from '@mui/material';
import { getStreaming } from '../utils/GetStreaming';

const VideoDisplay = ({theme}) => {
  const [data,setdata]=useState({})
  const { id } = useParams()
  const url = `https://www.ysoutube.com/watch?v=${id}`;

  useEffect(()=>{
   setdata(getStreaming(id))
  },[id])
  

  return (
    <Box sx={{color:theme?'black':'white',mx:4}}> 
     
 
      
      <ReactPlayer url={url} className='videodisplay' controls width={'65vw'} height={'70vh'} />
      <h2 className='title'>{data.title}</h2>
      <h3>{data.channelTitle}</h3>
 
 </Box>
  );
};

export default VideoDisplay;
