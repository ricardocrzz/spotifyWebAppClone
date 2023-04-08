import React from 'react'
import './Header.css'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import SearchIcon from '@mui/icons-material/Search';
import { useDataLayerValue } from './DataLayer';
import { Avatar } from '@mui/material';

function Header() {

    const [{ user }, dispatch] = useDataLayerValue();
    console.log("user object: ", user);
    return (
        <div className='header'>
            <div className="headerLeft">
                <ArrowCircleLeftIcon className='headerIcon' />
                <ArrowCircleRightIcon className='headerIcon' />
                <div className="headerSearch">
                    <SearchIcon className='searchIcon' />
                    <input className='searchInput' type='text' placeholder='What do you want to listen to?' />
                </div>
            </div>
            <div className="headerRight">
                <Avatar className='avatar' src={user?.images[0]?.url} alt='' />
                <h4>{user?.display_name}</h4>

            </div>
        </div>
    )
}

export default Header