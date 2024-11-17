import { TheatreSeatsMap, TicketSummary, Text, Divider, Counter } from "movie-ticket-booking-application-2024";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setTicketInfo } from "../utils/movieSlice";
import { Button, PageProgressIndicator } from "movie-ticket-booking-application-2024";
import { TheatreScreenImage } from "../assets/assets";

const SelectSeats = () => {

  const availableSeatsMap = {
    a1: 'available', a2: 'available', a3: 'booked', a4: 'available', a5: 'booked', a6: 'available', a7: 'available', a8: 'booked', a9: 'booked', a10: 'available',
    b1: 'booked', b2: 'available', b3: 'booked', b4: 'available', b5: 'available', b6: 'available', b7: 'booked', b8: 'available', b9: 'booked', b10: 'available',
    c1: 'available', c2: 'available', c3: 'booked', c4: 'available', c5: 'booked', c6: 'available', c7: 'available', c8: 'booked', c9: 'booked', c10: 'available',
    d1: 'booked', d2: 'available', d3: 'booked', d4: 'available', d5: 'available', d6: 'booked', d7: 'available', d8: 'available', d9: 'booked', d10: 'available',
    e1: 'available', e2: 'available', e3: 'booked', e4: 'available', e5: 'booked', e6: 'available', e7: 'available', e8: 'booked', e9: 'booked', e10: 'available',
    f1: 'booked', f2: 'available', f3: 'booked', f4: 'available', f5: 'available', f6: 'booked', f7: 'available', f8: 'available', f9: 'booked', f10: 'available',
    g1: 'available', g2: 'available', g3: 'booked', g4: 'available', g5: 'booked', g6: 'available', g7: 'available', g8: 'booked', g9: 'booked', g10: 'available',
    h1: 'booked', h2: 'available', h3: 'booked', h4: 'available', h5: 'available', h6: 'booked', h7: 'available', h8: 'available', h9: 'booked', h10: 'available',
  };
  const userPreferences = useSelector(state => state.movie.ticketInfo)
  const movieDetails = useSelector(state => state.movie.movieDetails)
  const userSelection = useSelector(state => state.movie.selection)
  const adultCount = userPreferences.personCount.adult;
  const childCount = userPreferences.personCount.child;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [availableSeats, setAvailableSeats] = useState(availableSeatsMap);
  const seatsSelected = userPreferences.seatsSelected;
  const proceedButtonEnabled = ( (adultCount>0 || childCount>0) && userPreferences.seatsSelected.length === adultCount+childCount)
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
    <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-y-auto no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl">

      <div className="flex flex-row justify-start mt-7 ml-3 gap-x-20">
        <Button type="back-button" buttonClass="rounded-lg" onClick={() => {
          navigateToMovieDetailsPage()
        }} />
        <PageProgressIndicator totalPages={3} currentPage={2} />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-3 mt-10 pb-20">

        <div className="flex flex-col items-center">
          <Text type='heading' content='Screen'/>
          <img src={TheatreScreenImage} />
        </div>

        <TheatreSeatsMap
          availableSeats={availableSeats}
          setAvailableSeats={setAvailableSeats}
          ticketCount={adultCount + childCount}
          seatsSelected={seatsSelected}
          setSeatsSelected={setSeatsSelected}
          rowsInTheatre={8}
          columnsInTheatre={10}
        />

        <Text
          content={'Ticket Details'}
          type='heading-large'
          customClass={'mt-5'}
        />
        <div className="flex flex-row px-10">
          <div className='flex flex-row justify-center gap-x-5 bg-black p-5'>
            <Counter count={adultCount} setCount={setAdultCount} direction='row' />
            <Divider orientation='vertical' />
            <Counter count={childCount} setCount={setChildCount} direction='row' text='child' />
          </div>
        </div>
        <div className="mr-10">
          <TicketSummary
            movieName={movieDetails.movieTitle}
            ticketCount={userPreferences.personCount}
            ticketAmount={adultCount*30 + childCount*15}
            selectedBuffetItems={userSelection.selectedBuffetItems}
            selectedBuffetAmount={userSelection.selectedBuffetAmount}
            seatNumbers={userPreferences.seatsSelected}
            theatreName={userSelection.selectedMovieTheatre}
            totalAmount={adultCount*30 + childCount*15 + userSelection.selectedBuffetAmount}
            sessionTime={userSelection.selectedSession}
          />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-auto p-0 flex justify-center">
        <div className="bg-opacity-80 backdrop-blur-lg rounded-full w-full max-w-[450px] p-1">
          <Button type="primary" text="View Ticket" buttonClass="w-full" onClick={() => navigate('/viewticket')} disabled={!proceedButtonEnabled} />
        </div>
      </div>
    </div>

  );
};

export default SelectSeats;
