import { Navigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const PrivateRoute = ({ children }) => {

  const authCurrentUser = JSON.parse(localStorage.getItem('email') ?? '');
  const isLoggedIn = !!authCurrentUser;

  return isLoggedIn ? children : <Navigate to="/signin" replace />;
};

export default PrivateRoute;
