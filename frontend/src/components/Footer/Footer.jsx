import React from 'react'
import "./Footer.css";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer-text">
            <p>Copyright &copy; 2023 by <span>slajdenXD</span> | All rights reserved.</p>
        </div>
        <div className="footer-iconTop">
            <a href='#home'><ArrowUpwardIcon sx={{ fontSize: "2rem" }}/></a>
        </div>
    </footer>
  )
}

export default Footer