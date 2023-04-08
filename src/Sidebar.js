import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from './DataLayer';

function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();
    //console.log(playlists?.items?.[0]?.tracks);
    console.log("playlists object: ", playlists);
    return (
        <div className='sidebar'>
            <img className='sidebarLogo'
                src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg' alt=''>
            </img>
            <SidebarOption Icon={HomeIcon} title='Home' />
            <SidebarOption Icon={SearchIcon} title='Search' />
            <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />
            <hr />
            {playlists?.items?.map((playlist) => (
                <SidebarOption title={playlist.name} />
            ))}
        </div>
    )
}

export default Sidebar