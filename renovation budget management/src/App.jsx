import './App.css'
import Header from "./jsx/Header.jsx";
import Footer from "./jsx/Footer.jsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from "react";
import TablePage from "./jsx/TablePage.jsx";
import Salon from "./jsx/Salon.jsx";


function App() {

    return (
        <Router>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={TablePage}/>
                    <Route path="/salon" element={<Salon/>}/>
                    <Route path="/kuchnia" component={TablePage}/>
                    <Route path="/lazienka" component={TablePage}/>
                    <Route path="/gabinet" component={TablePage}/>
                    <Route path="/sypialnia" component={TablePage}/>
                </Routes>
                <Footer/>
            </div>
        </Router>
    )
}

export default App
