import { Logo, InputField, Button, Text } from "movie-ticket-booking-application-2024";
import { LoginBackgroundImage } from "../assets/assets";
import { useEffect, useState, useRef } from "react";
import { validateUser } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setUserEmail } from '../utils/movieSlice';
import { resetMovieState } from "../utils/movieSlice";

const SignIn = () => {
    // Redirect use to home page if login details already exists
    const navigate = useNavigate();
    const savedEmail = localStorage.getItem("email")
    const isValid = !!savedEmail;
    const navigateRef = useRef(navigate);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const userEmail = useSelector((state) => state.movie.userEmail);
    const dispatch = useDispatch();
    const navigateToHomePage = () => {
        if (isValid) {
            navigateRef.current("/home");
        }
    }

    useEffect(() => {
        dispatch(resetMovieState());
        navigateToHomePage();
    }, [])


    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSignIn = async () => {
        const isValid = await validateUser(email, password);
        if (isValid) {
            dispatch(setUserEmail(email));
            navigate("/home");
        } else {
            setError(true);
        }
    };

    return (
        <div className="relative h-screen max-w-[450px] mx-auto bg-gradient-to-b from-[#0a0712] via-[#06000ecc] to-[#000000] blur-[12.6] overflow-hidden no-doc-scroll scrollbar-hide flex flex-col px-2 rounded-3xl gap-y-4">
            <div className="absolute top-0 left-0 w-full h-3/5 z-0">
                <img src={LoginBackgroundImage} className="w-full h-full object-cover blur-lg" alt="Background" />
            </div>
            <div className="relative flex flex-col justify-end flex-grow z-10 gap-y-5 pb-16 overflow-y-auto scrollbar-hide">
                <div className="flex justify-center mb-20 w-full">
                    <Logo size={'medium'} />
                </div>
                <div className="flex flex-col gap-8 px-10">
                    <InputField type="text" id="email" placeholderText="Enter your Email" value={email} onChange={updateEmail} />
                    <InputField type="password" id="password" placeholderText="Enter your password" value={password} onChange={updatePassword} />
                    {error && <Text type="custom" content="Invalid email or password" customClass={'text-red-500'} />}
                    <Button type="primary" text="Sign In" buttonClass="mt-10" disabled={!email || !password} onClick={handleSignIn} />
                </div>
            </div>
        </div>
    );
};

export default SignIn;
