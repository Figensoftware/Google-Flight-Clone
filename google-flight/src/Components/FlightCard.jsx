import React from 'react';
import Grid from '@mui/material/Grid2';
import "../style/FlightCard.css";
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MovingIcon from '@mui/icons-material/Moving';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useSelector } from 'react-redux';


function FlightCard() {
    const { flights, originSky, destinationSky } = useSelector((state) => state.flights);


    return (
        <div>
            <Grid container >
                {flights && flights.slice(0, 20).map((flight, index) => (
                    <div className="card" key={index}>

                        <Grid size={{ xs: 12, md: 12, lg: 12 }} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>

                            <div className="card-title">
                                <p>{originSky}</p>
                            </div>

                            <div className="airport-name">
                                <p>{destinationSky} ({Math.floor(Math.random() * 90000) + 10000}
                                    )</p>
                            </div>

                            <div className="ticket-price">
                                <p>${flight.price.toFixed(2)}</p>
                            </div>

                            <div className="ticket-time">
                                <p> {flight.day}</p>
                            </div>

                            <div className="ticket-group">
                                {flight.group === 'low' ? <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", fontFamily: "arial", fontSize: { xs: "7px", sm: "14", md: "15px", lg: "16px" }, minWidth: { xs: "30px", md: "100px", backgroundColor: "#34A853" } }} size='small' variant="contained" startIcon={< ArrowDownwardIcon />} >Low</Button>
                                    :
                                    flight.group === 'medium' ? <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", fontFamily: "arial", fontSize: { xs: "7px", sm: "14", md: "15px", lg: "16px" }, minWidth: { xs: "30px", md: "100px" }, backgroundColor: "#FBBC05" }} size='small' variant="contained" startIcon={< MovingIcon />} >Standard</Button>
                                        :
                                        <Button sx={{ borderRadius: "20px", textTransform: "none", fontWeight: "bold", fontFamily: "arial", fontSize: { xs: "7px", sm: "14", md: "15px", lg: "16px" }, minWidth: { xs: "20px", md: "90px" }, backgroundColor: "#EA4335" }} size='small' variant="contained" startIcon={< ArrowUpwardIcon />} >Expensive</Button>
                                }

                            </div>
                        </Grid>
                    </div>
                )
                )}
            </Grid >
        </div>

    )
}

export default FlightCard;




