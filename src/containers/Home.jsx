import { Header, BottomNavigationBar, Carousel, ScrollableList } from "movie-ticket-booking-application-2024";
import { movieCovers, sampleMovieCovers } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { resetMovieState } from "../utils/movieSlice";

const Home = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(resetMovieState());
    navigateToHomePage();
}, [])

  const navigateToHomePage = () => {
    navigate('/home');
  }
  const onNewIconsClick = () => {
    navigate("/comingSoon")
  }
  const onMovieClick = () => {
    navigate('/movieDetails')
  }

  return (
    <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-x-scroll no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl gap-y-4">
      <Header onProfileClick={onNewIconsClick} onNotificationClick={onNewIconsClick} />
      <Carousel imageArray={movieCovers} category={'Highlights'} onImageClick={onMovieClick} />
      <ScrollableList imagesObject={sampleMovieCovers} category={'New Release'} onImageClick={onMovieClick} />
      <ScrollableList imagesObject={sampleMovieCovers} category={'Upcoming'} onImageClick={onMovieClick} />
      <BottomNavigationBar onHeartClick={onNewIconsClick} onTicketClick={onNewIconsClick} />
    </div>

  );
};

export default Home;
