import { BrowserRouter, Route, Routes } from "react-router-dom";

import SignIn from "./containers/SignIn";
import Home from "./containers/Home";
import MovieDetails from "./containers/MovieDetails";
import SelectTheatre from "./containers/SelectTheatre";
import SelectBuffet from "./containers/SelectBuffet";
import SelectSeats from "./containers/SelectSeats";
import ViewTicket from "./containers/ViewTicket";
import ComingSoon from "./containers/ComingSoon";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/moviedetails"
          element={
            <PrivateRoute>
              <MovieDetails />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/buyticket/select-theatre"
          element={
            <PrivateRoute>
              <SelectTheatre />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/buyticket/select-buffet"
          element={
            <PrivateRoute>
              <SelectBuffet />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/buyticket/select-seats"
          element={
            <PrivateRoute>
              <SelectSeats />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/viewticket"
          element={
            <PrivateRoute>
              <ViewTicket />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/comingsoon"
          element={
            <PrivateRoute>
              <ComingSoon />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
