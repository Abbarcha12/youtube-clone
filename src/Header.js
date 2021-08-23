import React, { useState } from 'react'
import "./Header.css"
import MenuIcon from "@material-ui/icons/Menu"
import SearchIcon from "@material-ui/icons/Search"
import VideoCallIcon from "@material-ui/icons/VideoCall"
import NotificationsIcon from "@material-ui/icons/Notifications"
import AppIcon from "@material-ui/icons/Apps"
import Avatar from '@material-ui/core/Avatar'
import { Link } from 'react-router-dom'



function Header() {
    const [inputSearch, setInputSearch] = useState('');
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img src="you.png" alt="icon" className="header__logo" />
                </Link>

            </div>
            <div className="header__center">
                <input value={inputSearch} type="text" className="header__input" onChange={e => setInputSearch(e.target.value)} />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header_inputButton" />
                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header_icon" />
                <AppIcon className="header_icon" />
                <NotificationsIcon className="header_icon" />
                <Avatar />
            </div>







        </div>
    )
}

export default Header
