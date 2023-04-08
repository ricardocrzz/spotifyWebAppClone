import React from 'react'
import './Footer.css'

import ShuffleIcon from '@mui/icons-material/Shuffle';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FastForwardIcon from '@mui/icons-material/FastForward';
import RepeatIcon from '@mui/icons-material/Repeat';

import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import { Grid, Slider } from '@mui/material';

function Footer() {
    return (
        <div className='footer'>
            <div className='footerLeft'>
                <div className="songContainer">
                    <img className='songPicture' src="https://i.scdn.co/image/ab67616d0000b273c06f8626913962e921586190" alt="" />
                    <div className="songDetails">
                        <h2 className="songTitle">Volando</h2>
                        <h2 className="songArtist">Mora, Bad Bunny, Sech</h2>
                    </div>
                </div>
            </div>
            <div className='footerCenter'>
                <ShuffleIcon className='footerGreen' />
                <FastRewindIcon className='footerIcon' />
                <PlayCircleIcon className='footerPlay' />
                <FastForwardIcon className='footerIcon' />
                <RepeatIcon className='footerIcon' />
            </div>
            <div className='footerRight'>
                <Grid container spacing={2}>
                    <Grid item>
                        <KeyboardVoiceIcon className='footerIcon' />
                    </Grid>
                    <Grid item>
                        <QueueMusicIcon className='footerIcon' />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className='footerIcon' />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                    <Grid item>
                        <OpenInFullIcon className='footerIcon' />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer