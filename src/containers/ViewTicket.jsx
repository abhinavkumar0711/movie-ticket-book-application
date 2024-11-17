import { QRCodeGenerator, TicketSummary, Text, PageProgressIndicator, Button } from "movie-ticket-booking-application-2024";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTicketInfo } from "../utils/movieSlice";

const ViewTicket = () => {
  const userPreferences = useSelector(state => state.movie.ticketInfo)
  const movieDetails = useSelector(state => state.movie.movieDetails)
  const userSelection = useSelector(state => state.movie.selection)
  const adultCount = userPreferences.personCount.adult;
  const childCount = userPreferences.personCount.child;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const seatsSelected = userPreferences.seatsSelected;
  const setSeatsSelected = (newSeatsSelected) => {
    dispatch(setTicketInfo({ seatsSelected: newSeatsSelected }));
  }
  const setAdultCount = (count) => {
    dispatch(setTicketInfo({ personCount: { ...userPreferences.personCount, adult: count } }));
  };

  const setChildCount = (count) => {
    dispatch(setTicketInfo({ personCount: { ...userPreferences.personCount, child: count } }));
  };
  const navigateToMovieDetailsPage = () => {
    navigate('/buyticket/select-theatre');
  }

  return (
    <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-y-auto no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl mb-16">

      <div className="flex flex-row justify-start mt-7 mb-10 ml-3 gap-x-20">
        <Button type="back-button" buttonClass="rounded-lg" onClick={() => {
          navigate('/buyticket/select-seats')
        }} />
        <PageProgressIndicator totalPages={3} currentPage={3} />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-8 pb-20">

        <Text type='heading-large' content='My Ticket' />

        <div className='flex flex-col gap-2'>
          <QRCodeGenerator value="https://in.bookmyshow.com/movies/kung-fu-panda-4/ET00379741" />
          <Text
            content='You can start enjoying the movie by scanning your ticket to the theater and canteen staff.'
            customClass={'max-w-[380px] ml-10'}
          />
        </div>

        <div className="ml-0">
          <TicketSummary
            movieName={movieDetails.movieTitle}
            ticketCount={userPreferences.personCount}
            ticketAmount={adultCount * 30 + childCount * 15}
            selectedBuffetItems={userSelection.selectedBuffetItems}
            selectedBuffetAmount={userSelection.selectedBuffetAmount}
            seatNumbers={userPreferences.seatsSelected}
            theatreName={userSelection.selectedMovieTheatre}
            totalAmount={adultCount * 30 + childCount * 15 + userSelection.selectedBuffetAmount}
            sessionTime={userSelection.selectedSession}
          />
        </div>

        <div className="fixed bottom-0 left-0 right-0 mx-auto p-4 flex justify-center">
          <div className="bg-opacity-80 backdrop-blur-lg rounded-full w-full max-w-[450px] p-1">
            <Button
              type='secondary'
              text='Back To Home'
              onClick={() => navigate('/home')}
              buttonClass="w-full bg-red"
            />
          </div>
        </div>


      </div>
    </div>

  );
};

export default ViewTicket;
