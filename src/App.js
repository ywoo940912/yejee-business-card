import React from "react";
import Title from "./components/Title";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./style.css"

export default function App() {
    return(
        <div className="container">
            <Title />
            <Main />
            <Footer />
        </div>
    )
}