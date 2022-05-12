import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewPlace from "./pages/NewPlace";
import Users from "./pages/Users";
import MainNavigation from "./components/shared/navigtion/MainNavigation";

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" element={<Users />} />
          <Route path="/places/new" element={<NewPlace />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
