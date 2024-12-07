import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    flights: [],
    loading: false,
    originSky: '',
    destinationSky: '',
    error: null
}


export const fetchFlights = createAsyncThunk("fetchFlights", async ({ originSkyId, destinationSkyId, fromDate, returnDate }, { rejectWithValue }) => {
    try {
        const response = await axios.get('https://sky-scrapper.p.rapidapi.com/api/v1/flights/getPriceCalendar',
            {
                params: {
                    originSkyId,
                    destinationSkyId,
                    fromDate,
                    returnDate,
                    currency: 'USD',
                },
                headers: {
                    'x-rapidapi-key': '63dae52c24msh88e36fa401c14b3p15f7d8jsnb3fa76e9319f',
                    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com',
                },
            }
        );
        const flights = response.data.data.flights.days.map((day) => ({
            ...day,
            origin: originSkyId,
            destination: destinationSkyId,
        }));

        return flights;
    } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
    }
});


export const flightSlice = createSlice({
    name: 'flights',
    initialState,
    reducers: {
        setOriginSky: (state, action) => {
            state.originSky = action.payload;
        },
        setDestinationSky: (state, action) => {
            state.destinationSky = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchFlights.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchFlights.fulfilled, (state, action) => {
            state.loading = false;
            state.flights = action.payload;
        })
        builder.addCase(fetchFlights.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || 'Failed to fetch flights';
        });
    },
});


export const { setOriginSky, setDestinationSky } = flightSlice.actions;

export default flightSlice.reducer;