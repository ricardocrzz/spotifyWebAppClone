import React from 'react'
import './SidebarOption.css'

//ended on minute 2:52
function SidebarOption({ Icon, title }) {
    return (
        <div className='sidebarOption'>
            {Icon && <Icon className='sidebarOptionIcon' />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SidebarOption