import React from 'react'
import './Navbar.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Navbar = () => {
  return (
    <header className='header'>
      <a href='#' className='logo'>cs-archive</a>
      <nav className='navbar'>
        <a href='#' className='active'>Strona główna</a>
        <a href='#'>Sprawdź gracza</a>
        <a href='#'>Kontakt</a>
      </nav>
      <DarkModeOutlinedIcon fontSize='large'/>
    </header>
  )
}

export default Navbar