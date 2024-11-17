import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userEmail: '',
  movieDetails: {
    movieId: null,
    movieTitle: '',
    movieTicketPrice: 0,
  },
  selection: {
    selectedMovieTheatre: '',
    selectedSession: '',
    selectedBuffetItems: {}, 
    selectedBuffetAmount: 0,
  },
  ticketInfo: {
    ticketCount: 0,
    ticketsAmount: 0,
    personCount: { adult: 0, child: 0 },
    seatsSelected: [],
    totalAmount: 0,
  },
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setMovieDetails(state, action) {
      state.movieDetails = { ...state.movieDetails, ...action.payload };
    },
    setSelection(state, action) {
      state.selection = { ...state.selection, ...action.payload };
    },
    setTicketInfo(state, action) {
      state.ticketInfo = { ...state.ticketInfo, ...action.payload };
    },
    resetMovieState(state) {
      return initialState; 
    },
  },
});

export const {
  setUserEmail,
  setMovieDetails,
  setSelection,
  setTicketInfo,
  resetMovieState,
} = movieSlice.actions;

export default movieSlice.reducer;
