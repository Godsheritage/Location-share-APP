import React from "react";
import Auth from "./users/pages/Auth";
import Users from "./users/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./users/pages/UserPlaces";
import UpdatePlace from "./places/components/UpdatePlace";
import MainNavigation from "./shared/navigtion/MainNavigation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
          <Route path="/places/:placeId" element={<UpdatePlace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
