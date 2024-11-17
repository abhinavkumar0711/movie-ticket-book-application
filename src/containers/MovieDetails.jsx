import { AboutMovie, ScrollableList, Button, Text } from "movie-ticket-booking-application-2024";
import { MovieTrailer, KunfuCover } from "../assets/assets";
import { KFImages } from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setMovieDetails } from "../utils/movieSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const movieDetails = useSelector((state) => state.movie.movieDetails);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(setMovieDetails({ movieId: 97218341223, movieTitle: 'KungFu Panda 4', movieTicketPrice: 40 }));
    }, [])
    
    const navigateToHomePage = () => {
        navigate('/home')
    }
    const navigateToBuyTicketPage = () => {
        navigate('/buyTicket/select-theatre')
    }
    
    return (
        <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-hidden no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl">

            <div className="overflow-y-auto scrollbar-hide">
                <div className="absolute left-5 top-8 z-30">
                    <Button type="back-button" buttonClass="rounded-lg" onClick={(e) => {
                        navigateToHomePage()
                    }} />
                </div>
                <video
                    src={MovieTrailer}
                    autoPlay
                    loop
                    muted
                    controls
                    className="w-full h-[300px] object-fill"
                />
                <div className="flex mb-7">
                    <img src={KunfuCover} className="top-10 w-48 h-48 px-2" />
                    <AboutMovie
                        title='Kung Fu Panda 4'
                        studio='Disney'
                        rating={4}
                        imdbRating={8}
                    />
                </div>
                <div gap-y-4>
                    <Text type='heading' content='Movie Subject' customClass={'block'} />
                    <Text
                        type='paragraph'
                        content='In the film, Po (Black), who must find and train his successor as the new Dragon Warrior, teams up with fox bandit Zhen (Awkwafina) to defeat evil sorceress The Chameleon (Davis), before she steals the kung-fu abilities of all masters in China.'
                        className='text-white'
                    />
                </div>
                <div className="mt-5">
                    <ScrollableList imagesObject={KFImages} category='Images From Movie' onImageClick={() => {}} />
                </div>
                <div className="fixed bottom-0 left-0 right-0 mx-auto p-1 flex justify-center">
                    <div className="bg-opacity-80 backdrop-blur-lg rounded-full w-full max-w-[450px] p-1">
                        <Button type="primary" text="Buy Ticket Now" buttonClass="w-full" onClick={() => navigateToBuyTicketPage()} />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;
