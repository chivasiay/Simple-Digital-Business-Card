import React from "react"
import Name from "./components/Name"
import Intrests from "./components/Intrests"
import About from "./components/About"
import Photo from "./components/Photo"
import Footer from "./components/Footer"
import Button from "./components/Button"


export default function App() {
    return (
        <div className="container">
            <Photo />
            <Name />
            <Button />
            <About />
            <Intrests />
            <Footer />
        </div>
    )
}