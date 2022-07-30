import React from "react";
import Auth from "./users/pages/Auth";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./users/pages/UserPlaces";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./shared/context/AuthContext";
import { AuthContextProvider } from "./shared/context/AuthContext";
import UpdatePlace from "./places/components/UpdatePlace";
import MainNavigation from "./shared/navigtion/main navigation/MainNavigation";
// import MainNavigation from "./shared/navigtion/MainNavigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { contextTypes } from "./types";

const App: React.FC = () => {
  const { isLoggedIn } = useContext(AuthContext) as contextTypes;
  let routes;
  console.log(isLoggedIn);

  if (isLoggedIn) {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        <Route path="/places/:placeId" element={<UpdatePlace />} />
        {/* <Navigate to="/" /> */}
      </Routes>
    );
  } else {
    routes = (
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/:userId/places" element={<UserPlaces />} />
        {/* <Navigate to="/auth" /> */}
      </Routes>
    );
  }

  return (
    <AuthContextProvider>
      <Router>
      <MainNavigation />
        <main>
          {routes}

          {/* <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} /> */}
        </main>
      </Router>
    </AuthContextProvider>
  );
};

export default App;
