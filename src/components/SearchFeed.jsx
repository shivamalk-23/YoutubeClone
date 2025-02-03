/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { getStreaming } from '../utils/GetStreaming'
import { Box } from '@mui/material'
import VideoCardElement from './VideoCard'
import Error from './Error'

const SearchFeed = ({ theme }) => {
    const [vids, setvides] = useState([])
    const [querys, setQuerys] = useSearchParams()
    const query = querys.get('query')
    useEffect(() => {

        getStreaming(query)
            .then(data => {
                setvides(data);

            })
            .catch(error => {
                console.error('Error fetching videos:', error)
            });

    }, [query]);
    console.log(vids)

    return (


        (vids.length !== 0 ? (<Box sx={{ width: '100%', padding: 4, color: theme ? 'black' : 'white' }} >
            <h2 className='title'>You Searched For <span className='highlight'>{query}</span></h2>

            <Box sx={{ flexWrap: 'wrap', display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>

                {(vids?.map((each) => {
                    return (each.type === 'video' && <VideoCardElement theme={theme} key={each.videoId} detail={each} />)
                }))}

            </Box>
        </Box>) : <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
            Loading
        </Box>)

    )
}

export default SearchFeed
