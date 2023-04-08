import React from 'react'
import './Body.css'
import Header from './Header'
import { useDataLayerValue } from './DataLayer'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function Body({ spotify }) {
    const [{ playlist }, dispatch] = useDataLayerValue();
    console.log("playlist object: ", playlist);
    return (
        <div className='body'>
            <Header spotify={spotify} />
            <div className="bodyInfo">
                {playlist?.images?.[0] && (
                    <img src={playlist?.images[0]?.url} alt="" className="bodyPicture" />
                )}
                <div className="bodyInfoText">
                    <strong>Playlist</strong>
                    <h2>{playlist?.name}</h2>
                    <p>{playlist?.description}</p>
                </div>
            </div>
            <div className="bodyIcons">
                <PlayCircleFilledIcon className="playIcon" />
                <FavoriteIcon className="favIcon" />
                <MoreHorizIcon className="moreIcon" />
            </div>
            {playlist?.tracks?.items?.map((item) => (
                <div className="bodySong">
                    <img className='bodySongPicture' src={item.track.album.images[0].url} alt="" />
                    <div className="bodySongInfo">
                        <h4 className="bodySongTitle">{item.track.name}</h4>
                        <div className="bodySongArtists">
                            {item.track.artists.map((artist) => (
                                <h4 >{artist.name}, </h4>
                            ))}
                        </div>
                        <h4 className='bodySongAlbum'> {item.track.album.name}</h4>
                    </div>
                </div>
            ))}
        </ div>
    )
}

export default Body