import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Header.css'

function Header() {
    return (
       <div className="header">
           <div className="header__left">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" alt="" />
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__center">
                <div className="header__option">
                    <HomeIcon fontSize="large"/>
                </div>

                <div className="header__option">
                    <FlagIcon fontSize="large" />
                </div>

                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>

                <div className="header__option">
                  <StorefrontOutlinedIcon fontSize="large" />
                </div>
			  
                <div className="header__option">
                  <SupervisedUserCircleIcon fontSize="large" />
                </div>

            </div> 

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={""}/>
                    <h4>{}</h4>
                </div>

                <IconButton>
                  <AddIcon />  
                </IconButton>

                <IconButton>
                  <ForumIcon />  
                </IconButton>
                
                <IconButton>
                  <NotificationsActiveIcon />  
                </IconButton>

                <IconButton>
                  <ExpandMoreIcon />  
                </IconButton>

            </div>
       </div>
    )
}

export default Header
