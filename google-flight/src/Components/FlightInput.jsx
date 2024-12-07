import React, { useState } from 'react';
import flightBg from "../assets/flightbg.png";
import "../style/FlightInput.css";
import TextField from '@mui/material/TextField';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid2';
import { useDispatch } from 'react-redux';
import { fetchFlights, setDestinationSky, setOriginSky } from '../redux/flightSlice';



function FlightInput() {
    const [originSkyId, setOriginSkyId] = useState('');
    const [destinationSkyId, setDestinationSkyId] = useState('');
    const [fromDate, setFromDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const dispatch = useDispatch();


    const handleSearch = () => {
        dispatch(setOriginSky(originSkyId));
        dispatch(setDestinationSky(destinationSkyId));
        dispatch(fetchFlights({ originSkyId, destinationSkyId, fromDate, fromDate, returnDate }));
    }


    return (
        <div className='flightInput'>
            <img src={flightBg} className='flightbgImg' />
            <h1 className='flightTitle'>Flights</h1>

            <div className='flightSelect'>

                <Grid container >
                    <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <TextField
                            value={originSkyId}
                            onChange={(e) => setOriginSkyId(e.target.value)}
                            sx={{
                                width: { xs: "130px", sm: "220px", md: "320px" }
                            }}
                            label=' ◉ Where from?'
                            variant="outlined" select
                        >
                            <MenuItem value="BOM">Mumbai (BOM)</MenuItem>
                            <MenuItem value="LON">London (LON)</MenuItem>
                            <MenuItem value="NYC">New York (NYC)</MenuItem>
                            <MenuItem value="JFK">New York (JFK)</MenuItem>
                            <MenuItem value="LAX">Los Angeles (LAX)</MenuItem>
                            <MenuItem value="SFO">San Francisco (SFO)</MenuItem>
                            <MenuItem value="IST">Istanbul (IST)</MenuItem>
                            <MenuItem value="DXB">Dubai (DXB)</MenuItem>
                            <MenuItem value="SIN">Singapore (SIN)</MenuItem>
                            <MenuItem value="CDG">Paris (CDG)</MenuItem>

                        </TextField>

                        <SwapHorizontalCircleOutlinedIcon sx={{ fontSize: { xs: '15px', sm: '30px' }, color: "#83b7e3" }} />

                        <TextField
                            value={destinationSkyId}
                            onChange={(e) => setDestinationSkyId(e.target.value)}
                            sx={{ width: { xs: "130px", sm: "220px", md: "320px" } }}
                            label='⚲ Where to?'
                            variant="outlined" select
                        >
                            <MenuItem value="BOM">Mumbai (BOM)</MenuItem>
                            <MenuItem value="LON">London (LON)</MenuItem>
                            <MenuItem value="NYC">New York (NYC)</MenuItem>
                            <MenuItem value="JFK">New York (JFK)</MenuItem>
                            <MenuItem value="LAX">Los Angeles (LAX)</MenuItem>
                            <MenuItem value="SFO">San Francisco (SFO)</MenuItem>
                            <MenuItem value="IST">Istanbul (IST)</MenuItem>
                            <MenuItem value="DXB">Dubai (DXB)</MenuItem>
                            <MenuItem value="SIN">Singapore (SIN)</MenuItem>
                            <MenuItem value="CDG">Paris (CDG)</MenuItem>
                        </TextField>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>

                        <TextField
                            sx={{
                                width: { xs: "130px", sm: "220px", md: "180px" }, "& input": {
                                    color: "gray",
                                },
                                "& label": {
                                    color: "gray",
                                },
                                "& .MuiInput-underline:before": {
                                    borderBottomColor: "gray",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "gray",
                                }
                            }}
                            value={fromDate}
                            onChange={(e) => setFromDate(e.target.value)}
                            label='Departure'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            variant="outlined"
                        />

                        <TextField
                            sx={{
                                width: { xs: "130px", sm: "220px", md: "180px" }, "& input": {
                                    color: "gray",
                                },
                                "& label": {
                                    color: "gray",
                                },
                                "& .MuiInput-underline:before": {
                                    borderBottomColor: "gray",
                                },
                                "& .MuiInput-underline:after": {
                                    borderBottomColor: "gray",
                                }
                            }}
                            value={returnDate}
                            onChange={(e) => setReturnDate(e.target.value)}
                            type='date'
                            InputLabelProps={{
                                shrink: true
                            }}
                            label='Return'
                            variant="outlined"
                        />
                    </Grid>
                </Grid>
            </div>

            <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginTop: "-20px", fontFamily: "arial", backgroundColor: "#87bce3" }} size='small' variant="contained" startIcon={<SearchIcon sx={{ fontSize: { xs: "20px", md: "26px" } }} />} onClick={handleSearch} >Search</Button>

        </div>
    )
}

export default FlightInput;