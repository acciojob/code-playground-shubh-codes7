import React from "react";
import "./../styles/App.css";
import PrivateRoute from "./PrivateRoute.js";
import Login from "./Login.js";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  return (
    <div className="main-container">
      <BrowserRouter>

      {isAuthenticated
        ? "Logged in, Now you can enter Playground"
        : "You are not authenticated, Please login first"
      }

      
      <li><Link to="/privateroute">PlayGround</Link></li>
      <li><Link to="/login">Login</Link></li>

        <Routes>
          <Route path="/" element={ <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
          <Route path="/privateroute" element={ <PrivateRoute isAuthenticated={isAuthenticated}/>}/>
          <Route path="/login" element={ <Login isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>}/>
        </Routes>
      </BrowserRouter>
      
      

      
    </div>
  );
};

export default App;
