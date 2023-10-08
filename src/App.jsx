import './App.css'
import Header from "./jsx/Header.jsx";
import Footer from "./jsx/Footer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Room from "./jsx/Room.jsx";
import Home from "./jsx/Home.jsx";
import React from "react";

function App() {
    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/:roomName" element={<Room/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;
