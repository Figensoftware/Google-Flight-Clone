import Drawer from '@mui/material/Drawer';
import { useDispatch, useSelector } from 'react-redux';
import "../style/Drawer.css";
import { setDrawer } from '../redux/appSlice';
import HotelIcon from '@mui/icons-material/Hotel';
import HouseIcon from '@mui/icons-material/House';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LuggageIcon from '@mui/icons-material/Luggage';
import Button from '@mui/material/Button';
import TimelineIcon from '@mui/icons-material/Timeline';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import SettingsIcon from '@mui/icons-material/Settings';
import FeedbackIcon from '@mui/icons-material/Feedback';
import HelpIcon from '@mui/icons-material/Help';


function DrawerApp() {
    const { drawer, } = useSelector((state) => state.app);
    const dispatch = useDispatch();




    return (
        <div >
            <Drawer open={drawer} anchor='left' onClose={() => dispatch(setDrawer())}>
                <div className='drawer' >
                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px", }} size='small' variant="outlined" color='inherit' startIcon={<LuggageIcon color='inherit' />} >Travel</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<TravelExploreIcon color='inherit' />} >Explore</Button>

                    <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px", color: "#1962D2", backgroundColor: "#b3def2" }} size='small' variant="contained" startIcon={<AirplanemodeActiveIcon color='inherit' />} >Flights</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<HotelIcon color='inherit' />} >Hotels</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<HouseIcon color='inherit' />} >Vacation Rentals</Button>

                    {/* 2 */}
                    <hr style={{ backgroundColor: "#202124", width: "250px" }} />

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px", }} size='small' variant="outlined" color='inherit' startIcon={<TimelineIcon color='inherit' />} >Tracked Flight Prices</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<LanguageIcon color='inherit' />} >Change Language</Button>


                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<CurrencyExchangeIcon color='inherit' />} >Change Currency</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<AddLocationIcon color='inherit' />} >Change Location</Button>

                    {/* 3 */}
                    <hr style={{ backgroundColor: "#202124", width: "250px" }} />

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px", }} size='small' variant="outlined" color='inherit' startIcon={<SettingsIcon color='inherit' />} >Flight Settings</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<FeedbackIcon color='inherit' />} >Feedback</Button>

                    <Button sx={{ color: "#505053", borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "10px", fontFamily: "arial", border: "none", paddingRight: "40px" }} size='small' variant="outlined" color='inherit' startIcon={<HelpIcon color='inherit' />} >Help</Button>

                </div>
            </Drawer>
        </div>
    )
}

export default DrawerApp;
