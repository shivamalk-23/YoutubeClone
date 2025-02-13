/* eslint-disable react/prop-types */
import { Box, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import search from '../assets/search.svg'
import moon from '../assets/moon.svg'
import sun from '../assets/sun.svg'

const Navbar = ({ toggleTheme, theme }) => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#d500f9', padding: { xs: '0.4rem', md: '1rem' } }}>
      <Box sx={{ justifySelf: 'self-start' }}>
        <Link to={'/'}>
          <img src={logo} alt="logo" style={{ width: '50px' }} />
        </Link>
      </Box>

      <Box sx={{ display: 'flex',  ml: 'auto', alignItems: 'center' }}>

        <Box sx={{ background: 'linear-gradient(to right , white,grey )', width:  '100%' , borderRadius: '10px' }}>
          <Link to={searchTerm.length === 0 ? '' : `/search?query=${searchTerm}`}>
            <input type="text" style={{ backgroundColor: 'transparent', minWidth: '30px', border: 'none', outline: 'none', padding: '0 0 0 10px' }} className='input' onChange={e => setSearchTerm(e.target.value)} />

            <Button ><img src={search} alt="" height={'20px'} /></Button>
          </Link>
        </Box>
        <Button sx={{ display: { xs: 'none', md: 'block' }, backgroundColor: theme ? 'white' : 'black', mx: { md: 1 } ,color:theme?'black':'white'}} onClick={toggleTheme}>{theme ? 'Dark' : 'Light'}</Button>
        <Button variant='none' sx={{ display: { xs: 'block', md: 'none' },margin:0, mx:1,
    backgroundColor: 'transparent',padding: 0,minWidth: 'auto',
     minHeight: 'auto','& img': {width: '20px',height: 'auto',},}} onClick={toggleTheme}>{theme ? <img src={moon} alt="" /> : <img src={sun} />}</Button>
      </Box>

    </Box>
  )
}

export default Navbar
