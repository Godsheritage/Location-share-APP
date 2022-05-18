import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./users/pages/UserPlaces";
import Users from "./pages/Users";
import MainNavigation from "./components/shared/navigtion/MainNavigation";

const App:React.FC = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/:userId/places" element={<UserPlaces />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
