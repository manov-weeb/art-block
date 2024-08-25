import "./App.css";
import {  Route, Routes, Link } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from './components/Header/Header'
import ConnectWallet from "./components/ConnectWallet/ConnectWallet";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import MyPictures from "./pages/MyPictures/MyPictures";
import Popular from "./pages/Popular/Popular";

import Upvotes from "./pages/Upvotes/Upvotes";
import Settings from "./pages/Settings/Settings";
import Home from "./pages/Home/Home";
import Redeem from "./pages/Redeem/Redeem";

// Import your page components


const App = () => {
  return (
   
      <div className="container">
        <div className="left-section">
          <div className="logo">
            <Link to={"/"}>
              <h2>ArtBlock</h2>
            </Link>
          </div>
          <Sidebar />
        </div>
        <div className="main">
          <Header />
          
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/my-pictures" element={<MyPictures />} />
            <Route path="/redeem" element={<Redeem />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/my-upvotes" element={<Upvotes />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
        <div className="right-section">
          <ConnectWallet />
          <DarkModeToggle />
        </div>
      </div>
   
  );
};

export default App;
