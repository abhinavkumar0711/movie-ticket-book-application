import { BuffetOption, Button, Text } from "movie-ticket-booking-application-2024";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setSelection } from "../utils/movieSlice";
import { BuffetItems, PopCorn } from "../assets/assets";

const BuffetSelection = () => {
  const userSelection = useSelector(state => state.movie.selection);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [smallCount, setSmallCount] = useState(() => userSelection?.selectedBuffetItems?.small ?? 0);
  const [mediumCount, setMediumCount] = useState(() => userSelection?.selectedBuffetItems?.medium ?? 0);
  const [largeCount, setLargeCount] = useState(() => userSelection?.selectedBuffetItems?.large ?? 0);
  const [doubleMediumCount, setDoubleMediumCount] = useState(() => userSelection?.selectedBuffetItems?.doubleMedium ?? 0);
  const totalBuffetAmount = smallCount * BuffetItems.small.price + mediumCount * BuffetItems.medium.price + largeCount * BuffetItems.large.price + doubleMediumCount * BuffetItems.doubleMedium.price;

  const addToCart = () => {
    const selectedBuffetItems = {
      small: smallCount,
      medium: mediumCount,
      large: largeCount,
      doubleMedium: doubleMediumCount
    };

    dispatch(setSelection({
      selectedBuffetItems,
      selectedBuffetAmount: totalBuffetAmount,
    }));

    navigate('/buyticket/select-theatre')
  };

  return (
    <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-x-scroll no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl">

      <div className="relative flex items-center justify-between px-4 mt-5">
        <Button
          type="back-button"
          buttonClass="rounded-lg"
          onClick={() => navigate('/buyticket/select-theatre')}
        />
        <img
          src={PopCorn}
          alt="Popcorn Icon"
          className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16"
        />
      </div>

      <div className="mt-10 mb-20 space-y-6 px-4">
        <BuffetOption
          title={BuffetItems.small.name}
          subTitle={BuffetItems.small.food}
          description={BuffetItems.small.drinks}
          price={BuffetItems.small.price}
          image={BuffetItems.small.image}
          count={smallCount}
          setCount={setSmallCount}
        />
        <BuffetOption
          title={BuffetItems.medium.name}
          subTitle={BuffetItems.medium.food}
          description={BuffetItems.medium.drinks}
          price={BuffetItems.medium.price}
          image={BuffetItems.medium.image}
          count={mediumCount}
          setCount={setMediumCount}
        />
        <BuffetOption
          title={BuffetItems.large.name}
          subTitle={BuffetItems.large.food}
          description={BuffetItems.large.drinks}
          price={BuffetItems.large.price}
          image={BuffetItems.large.image}
          count={largeCount}
          setCount={setLargeCount}
        />
        <BuffetOption
          title={BuffetItems.doubleMedium.name}
          subTitle={BuffetItems.doubleMedium.food}
          description={BuffetItems.doubleMedium.drinks}
          price={BuffetItems.doubleMedium.price}
          image={BuffetItems.doubleMedium.image}
          count={doubleMediumCount}
          setCount={setDoubleMediumCount}
        />
      </div>
      
      <div className="fixed bottom-0 left-0 right-0 mx-auto max-w-[450px] bg-brown bg-opacity-90 backdrop-blur py-4 flex justify-around items-center h-24 overflow-hidden">
        <div className="flex items-center justify-between">
          <Text type="price-medium" content={`Price: $${totalBuffetAmount}`} />
          <Button
            type="primary"
            text="Add to Cart"
            buttonClass="w-1/2"
            onClick={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default BuffetSelection;
