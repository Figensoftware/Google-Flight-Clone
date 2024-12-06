import React, { useState } from 'react';
import flightBg from "../assets/flightbg.png";
import "../style/FlightInput.css";
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SwapHorizontalCircleOutlinedIcon from '@mui/icons-material/SwapHorizontalCircleOutlined';
import EventNoteIcon from '@mui/icons-material/EventNote';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';


function FlightInput() {
    const [flightFrom, setFlightFrom] = useState("");
    const [flightTo, setFlightTo] = useState("");


    return (
        <div className='flightInput'>
            <img src={flightBg} className='flightbgImg' />
            <h1 className='flightTitle'>Flights</h1>

            <div className='flightSelect'>
                <TextField
                    value={flightFrom}
                    onChange={(e) => setFlightFrom(e.target.value)}
                    sx={{ width: "280px", marginLeft: "20px" }}
                    label=' ◉ Where from?'
                    // slotProps={{
                    //     input: {
                    //         startAdornment: (
                    //             <InputAdornment position="start">
                    //                 <TripOriginIcon />
                    //             </InputAdornment>
                    //         ),
                    //     },
                    // }}
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

                <SwapHorizontalCircleOutlinedIcon sx={{ fontSize: "30px", color: "gray" }} />

                <TextField
                    value={flightTo}
                    onChange={(e) => setFlightTo(e.target.value)}
                    sx={{ width: "280px", marginRight: "20px" }}
                    label='⚲ Where to?'
                    // slotProps={{
                    //     input: {
                    //         startAdornment: (
                    //             <InputAdornment position="start">
                    //                 <LocationOnIcon />
                    //             </InputAdornment>
                    //         ),
                    //     },
                    // }}
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

                <TextField
                    sx={{ width: "180px" }}
                    placeholder='Departure'
                    type='date'
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    < EventNoteIcon />
                                </InputAdornment>
                            ),
                        },
                    }}
                    variant="outlined"
                />

                <TextField
                    sx={{ width: "150px" }}
                    placeholder='Return'

                    variant="outlined"
                />
            </div>

            <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", padding: "8px 10px", marginTop: "-20px", fontFamily: "arial", backgroundColor: "#83b7e3" }} size='small' variant="contained" startIcon={<SearchIcon sx={{ color: "#fff", fontSize: "26px" }} />} >Search</Button>

        </div>
    )
}

export default FlightInput;
