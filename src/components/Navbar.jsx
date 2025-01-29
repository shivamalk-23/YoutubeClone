/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
const Navbar = ({ toggleTheme, theme }) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div style={{ display: 'flex', backgroundColor: '#d500f9', justifyContent: 'space-between', padding: '1rem' }}>
      <Link to={'/'}>
        <img src={logo} alt="logo" style={{ width: '50px' }} />
      </Link>
      <div>
        <Box sx={{display:'flex'}}>
          <Button sx={{ backgroundColor: theme ? 'white' : 'black', mx: 1 }} onClick={toggleTheme}>{theme ? 'Dark' : 'Light'}</Button>
          <Box sx={{background:'linear-gradient(to right , white,grey )',borderRadius:'10px'}}>
            <input  type="text" style={{ backgroundColor: 'transparent',height:'100%', border: 'none' ,outline:'none',padding:'0 0 0 10px'}} onChange={e => setSearchTerm(e.target.value)} />
            <Link to={searchTerm.length === 0 ? '' : `/search?query=${searchTerm}`}>
              <Button><img src={search} alt="" height={'20px'} /></Button>
            </Link>
          </Box>
        </Box>
      </div>
    </div>
  )
}

export default Navbar
