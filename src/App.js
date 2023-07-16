import "./App.css";
import Login from "./components/login/Login";
import React, { useState } from "react";
import Profile from "./components/profile/Profile";
import { LoginContext } from "./Contexts/LoginContext";
import DataApi from "./components/apiMarvel/Data";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import OnlineUsers from "./components/onlineUsers/OnlineUsers";
import Navigation from "./components/nav/Navigation";
import AboutUs from "./components/aboutus/AboutUs";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [database, setDataBase] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <LoginContext.Provider
          value={{
            username,
            setUsername,
            setShowProfile,
            setDataBase,
            database,
            password,
            setPassword,
          }}
        >
          <Routes>
            <Route path="/nav" element={<Navigation />} />

            <Route
              path="/aboutus"
              element={showProfile ? <AboutUs /> : <Login />}
            />
          </Routes>

          {showProfile ? <Profile /> : <Login />}
          {showProfile ? <Navigation /> : <Login />}

          <DataApi />
          <OnlineUsers />
        </LoginContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
