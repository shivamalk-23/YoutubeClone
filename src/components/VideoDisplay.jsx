/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getDetails } from '../utils/GetDetails';


const VideoDisplay = ({theme}) => {
  const [more,setMore]=useState(false)
  const [data,setdata]=useState({})
  const { id } = useParams()
  const url = `https://www.youtube.com/watch?v=${id}`;
  

  useEffect(()=>{
    getDetails(id).then((data)=>{
      console.log(data)
      setdata(data)
    })
  },[id])



  return (
    <Box sx={{color:theme?'black':'white',mx:4}}> 
     
  
 
      
      <ReactPlayer url={url} className='videodisplay' controls width={'65vw'} height={'70vh'} />
   
   <Box sx={{m:3}} onClick={()=>setMore(prev=>!prev)}>
      <h2 >{data.title}</h2>
      <h3>{data.channelTitle}</h3>
      <p>{data.publishedTimeText}</p>
    { !more ? <Box sx={{backgroundColor :theme ?'lightgray':'#262e28',p:'1rem',mt:3,borderRadius:'10px'}}>
        <p>{data.description? data.description.slice(0,100) :''}...more</p>
        
      </Box>
     : 

     <Box sx={{backgroundColor:theme ?'lightgray':'#262e28',p:'1rem',mt:3,borderRadius:'10px'}}>
        <p>{data?.description}</p>
  
      </Box>
    }
      </Box>
 </Box>
  );
};

export default VideoDisplay;
