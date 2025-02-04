/* eslint-disable react/prop-types */
import {  useState } from "react"


import { Stack, Button, Box } from "@mui/material"
import { Link } from "react-router-dom"
const fields = ['Music', 'Podcasts', 'Trending', 'Movies', 'Gaming', 'WebDevelopment', 'CatVideos', 'FunnyVideos', 'History', 'Science']
const FeedBar = ({theme}) => {





  return (
   
    <Box className="category" sx={{ width:{lg:'20vw'},py:{xs:0,md:'1.5rem'},px:{xs:3,md:1},display: 'flex',alignItems:{ xs: 'none', } ,flexDirection: { xs: 'row', lg: 'column', },background:`linear-gradient(to bottom, #d500f9,${theme?'#f9f9f9':'#262626'})` ,borderTop:'2px solid black'}} >
      {fields.map(element => {
        return (
         
       
           <Link to={ `/search?query=${element}`} style={{margin:'0.5rem',textDecoration:'none',backgroundColor :'#1a1a1a',borderRadius:'10px',padding:'0.5rem 5rem 0.5rem 1rem'}} key={element} >
            <Box sx={{color:"white"}} >
            {element.length > 10 ? element.slice(0, 10) + '...' : element}
            </Box>
            </Link>
       
       )
      })}


    </Box>
    )
}
export default FeedBar
