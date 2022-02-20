import React from 'react'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleIcon from '@mui/icons-material/People';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import SidebarRow from './SidebarRow'

import './Sidebar.css'

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src={"https://scontent.flos2-1.fna.fbcdn.net/v/t1.6435-1/cp0/c0.0.50.50a/p50x50/49439046_2066502190082113_6248699411589758976_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=7206a8&_nc_eui2=AeFeelzOs-IfGBfNiKgc0ckrK3qC2WOSQ8creoLZY5JDx8bKd10Vr40QqEvhAEF8QRUwl6GFw_lVw5C6yUSgda5j&_nc_ohc=3aqhJMgmuFIAX91NeYo&_nc_ht=scontent.flos2-1.fna&oh=00_AT_w6cQctLC3VoCIr1I5waRLsBOeGA4WJNnxI58mmktCOg&oe=6228B06F"} title={ "Akor Sunday"} />
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/> 
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
            <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace" />
        </div>
    )
}

export default Sidebar
