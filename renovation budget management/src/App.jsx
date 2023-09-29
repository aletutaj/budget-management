import './App.css'
import Header from "./jsx/Header.jsx";
import Footer from "./jsx/Footer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import Salon from "./jsx/Salon.jsx";
import Kitchen from "./jsx/Kitchen.jsx";
import Bathroom from "./jsx/Bathroom.jsx";
import Office from "./jsx/Office.jsx";
import Bedroom from "./jsx/Bedroom.jsx";
import Home from "./jsx/Home.jsx";


function App() {

    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/salon" element={<Salon/>}/>
                    <Route path="/kuchnia" element={<Kitchen/>}/>
                    <Route path="/lazienka" element={<Bathroom/>}/>
                    <Route path="/gabinet" element={<Office/>}/>
                    <Route path="/sypialnia" element={<Bedroom/>}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
