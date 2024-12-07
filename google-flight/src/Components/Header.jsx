import React from 'react';
import "../style/Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LuggageIcon from '@mui/icons-material/Luggage';
import Button from '@mui/material/Button';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LightModeIcon from '@mui/icons-material/LightMode';
import Grid from '@mui/material/Grid2'
import GoogleLogo from './GoogleLogo';
import { setDrawer, setTheme } from '../redux/appSlice';
import { useDispatch, useSelector } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    const { theme } = useSelector((state) => state.app);

    const changeTheme = () => {
        const root = document.getElementById("root");
        if (!theme) {
            root.style.backgroundColor = "rgb(24, 13, 13)";
            root.style.color = "#fff";
        } else {
            root.style.backgroundColor = "#fff";
            root.style.color = "rgb(24, 13, 13)";
        }
        dispatch(setTheme(!theme));
    }

    return (
        <Grid  >
            <div className='header'>

                <Grid size={{ xs: 11, md: 11, lg: 11 }} >

                    <div className="header-left">
                        <MenuIcon sx={{ margin: "15px", marginLeft: "20px", color: "gray", cursor: "pointer" }} onClick={() => dispatch(setDrawer())} />
                        <GoogleLogo />
                        <div className='navbar'>
                            <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginRight: "10px", fontFamily: "arial" }} size='small' variant="outlined" color='primary' startIcon={<LuggageIcon color='primary' />} >Travel</Button>
                            <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginRight: "10px", fontFamily: "arial" }} size='small' variant="outlined" color='primary' startIcon={<TravelExploreIcon color='primary' />} >Explore</Button>
                            <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginRight: "10px", fontFamily: "arial", color: "#1962D2", backgroundColor: "#b3def2" }} size='small' variant="contained" startIcon={<AirplanemodeActiveIcon color='primary' />} >Flights</Button>
                            <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginRight: "10px", fontFamily: "arial" }} size='small' variant="outlined" color='primary' startIcon={<HotelIcon color='primary' />} >Hotels</Button>
                            <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginRight: "10px", fontFamily: "arial" }} size='small' variant="outlined" color='primary' startIcon={<HouseIcon color='primary' />} >Vacation Rentals</Button>

                            <div>
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid size={{ xs: 1, md: 1, lg: 1 }}>

                    <div className="header-right">
                        {
                            !theme ? <Tooltip title="Change Appearance" sx={{ marginRight: "15px" }} onClick={changeTheme} >
                                <IconButton>
                                    <DarkModeIcon sx={{ color: "#505053", fontSize: "22px" }} />
                                </IconButton>
                            </Tooltip>
                                :
                                <Tooltip title="Change Appearance" sx={{ marginRight: "15px" }} onClick={changeTheme} >
                                    <IconButton>
                                        <LightModeIcon sx={{ color: "#505053", fontSize: "22px" }} />
                                    </IconButton>
                                </Tooltip>
                        }

                        <Tooltip title="Google Apps" sx={{ marginRight: "15px" }}>
                            <IconButton>
                                <AppsIcon sx={{ color: "#505053" }} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Google Account" sx={{ marginRight: { xs: "50px", md: "30px" } }}>
                            <IconButton>
                                <Avatar sx={{ bgcolor: "#f2bf66", color: "#e05356" }}>FD</Avatar>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Grid>
            </div>
        </Grid>
    )
}

export default Header;

