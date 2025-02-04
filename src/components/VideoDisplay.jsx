/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { getDetails } from '../utils/GetDetails';


const VideoDisplay = ({ theme }) => {
  const [more, setMore] = useState(false)
  const [data, setdata] = useState({})
  const { id } = useParams()
  const url = `https://www.youtube.com/watch?v=${id}`;


  useEffect(() => {
    getDetails(id).then((data) => {
      console.log(data)
      setdata(data)
    })
  }, [id])



  return (
    <Box sx={{ width:'80vw',height:{xs:'90vh',md:'90%'}, padding: { xs: 0.6, sm: 2 }, backgroundColor: theme ? '#f9f9f9' : '#181818', color: theme ? 'black' : 'white' }}  >


      <Box sx={{ width: { xs: '90vw', lg: '90%' }, height: { xs: '30vh', sm: '50vh', md: '70vh', lg: '70vh' } }}>

        <ReactPlayer url={url} className='videodisplay' controls width={'100%'} height={'100%'} />
      </Box>
      <Box sx={{ m: 3 }} onClick={() => setMore(prev => !prev)}>
        <h2 >{data.title}</h2>
        <h3>{data.channelTitle}</h3>
        <p>{data.publishedTimeText}</p>
        {!more ? <Box sx={{ backgroundColor: theme ? 'lightgray' : '#262e28', p: '1rem', mt: 3, borderRadius: '10px' }}>
          <p>{data.description ? data.description.slice(0, 100) : ''}...more</p>

        </Box>
          :

          <Box sx={{ backgroundColor: theme ? 'lightgray' : '#262e28', p: '1rem', mt: 3, borderRadius: '10px' }}>
            <p>{data?.description}</p>

          </Box>
        }
      </Box>
    </Box>
  );
};

export default VideoDisplay;
