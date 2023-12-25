import React from 'react'
import './Navbar.css'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const Navbar = () => {
  return (
    <header className='header'>
      <a href='#' className='logo'>cs-archive</a>
      <input type="checkbox" id='check' />
      <label for="check" className='icons'>
        <MenuIcon fontSize='large' id="menu-icon"/>
        <MenuOpenIcon fontSize='large' id="close-icon"/>
      </label>
      <nav className='navbar'>
        <a href='#'>Strona główna</a>
        <a href='#'>Sprawdź gracza</a>
        <a href='#'>Kontakt</a>
        <a href='#'><DarkModeOutlinedIcon fontSize='large'/></a>
      </nav>
    </header>
  )
}

export default Navbar