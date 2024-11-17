import { Button, PageProgressIndicator, Text, ModalOptions } from "movie-ticket-booking-application-2024";
import { kungfupanda4 } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelection } from "../utils/movieSlice";
import { useState } from "react";

const Home = () => {

  const userPreferences = useSelector(state => state.movie.selection)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [dummyOptions, setDummyOptions] = useState();
  const proceedButtonDisabled = (userPreferences.selectedMovieTheatre && userPreferences.selectedSession)? false : true; 
  const SelectTheaterButtonType = (!userPreferences.selectedMovieTheatre ? 'selection' : 'primary');
  const SelectTheaterButtonText = (userPreferences.selectedMovieTheatre || 'Select Theatre *');
  const SelectSessionButtonType = (!userPreferences.selectedSession ? 'selection' : 'primary');
  const SelectSessionButtonText = (userPreferences.selectedSession || 'Select Session *');
  const SelectBuffetItemsButtonType = (!userPreferences.selectedBuffetAmount ? 'selection' : 'primary');
  const SelectBuffetItemsButtonText = (!userPreferences.selectedBuffetAmount ? 'Select Buffet' : 'Buffet Items added');

  const navigateToMovieDetailsPage = () => {
    navigate('/movieDetails');
  }
  const navigateToBuffetPage = () => {
    navigate('/buyticket/select-buffet');
  }
  const navigateToSelectTheatres = () => {
    navigate('/buyticket/select-seats');
  }
  const onClickSelectTheatre = () => {
    setDummyOptions(['Theatre 1', 'Theatre 2', 'Theatre 3', 'Theatre 4']);
    setModalOpen(true);
  }
  const onClickSelectSession = () => {
    setDummyOptions(['11-1 AM', '3-5 PM', '6-9 PM', '9-11 PM']);
    setModalOpen(true);
  }
  const onModalClose = (optionSelected) => {

    setModalOpen(false);
    if(!optionSelected) return;
    
      if(optionSelected.includes('AM') || optionSelected.includes('PM')){
          dispatch(setSelection({selectedSession: optionSelected}));
      }
      else{
        dispatch(setSelection({selectedMovieTheatre: optionSelected}));
      }
  }

  return (
    <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-x-scroll no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl">
      <div className="flex flex-row justify-start mt-7 ml-3 gap-x-20">
        <Button type="back-button" buttonClass="rounded-lg" onClick={(e) => {
          navigateToMovieDetailsPage()
        }} />
        <PageProgressIndicator totalPages={3} currentPage={1} />
      </div>

      <img src={kungfupanda4} className="w-full mt-10 mb-2" />

      <Text
        type='label-white'
        content='You need to select the mandatory fields (*) to proceed to the checkout page.'
      />

      <div className="flex flex-col gap-y-6 mt-6 px-4">
        <Button type={SelectTheaterButtonType} text={SelectTheaterButtonText} onClick={() => onClickSelectTheatre()} buttonClass="w-full" />
        <Button type={SelectSessionButtonType} text={SelectSessionButtonText} onClick={() => onClickSelectSession()} buttonClass="w-full" />
        <Button type={SelectBuffetItemsButtonType} text={SelectBuffetItemsButtonText} onClick={() => navigateToBuffetPage()} buttonClass="w-full" />

      </div>

      <div className="fixed bottom-0 left-0 right-0 mx-auto p-4 flex justify-center">
        <div className="bg-opacity-80 backdrop-blur-lg rounded-full w-full max-w-[450px] p-4">
          <Button type="primary" text="Next" buttonClass="w-full" onClick={() => navigateToSelectTheatres()} disabled={proceedButtonDisabled} />
        </div>
      </div>

      <ModalOptions isOpen={modalOpen} onClose={onModalClose} options={dummyOptions} />

    </div>

  );
};

export default Home;
