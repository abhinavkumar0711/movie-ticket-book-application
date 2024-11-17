import { FeatureInProgress } from "movie-ticket-booking-application-2024";
import { useNavigate } from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();
  const goBackToHomePage = () => {
    navigate('/home');
  }

    return (
      <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-x-scroll scrollbar-hide flex flex-col px-2 rounded-3xl gap-y-4">
          <FeatureInProgress onBackClick={goBackToHomePage}/>
      </div>
  
    );
  };
  
  export default Home;
  