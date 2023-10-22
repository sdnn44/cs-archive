import React from 'react'
import BanList from '../PlayerList/BanList'
import PlayerStatus from '../PlayerList/PlayerStatus'
import SearchForm from '../SearchForm/SearchForm'
import "./Header.css"

const Header = () => {
  return (
    <div className='header-container'>
        <header className='header-box'>
            <div className='header-content'>
                <h2 className='header-title'>znajdź aktywne bany gracza z sieci serwerów</h2> <br />
                <p className='header-text fs-18 fw-3'>Convert words to images with Fotor's free AI image generator. Watch your imagination transform into AI-generated images online. Free text to image AI generator, save time on creating or searching for the perfect image.</p>
                <SearchForm />
                <PlayerStatus />
                <BanList />
                {/* <p>Szczegóły</p> */}
            </div>
        </header>
    </div>
  )
}

export default Header