import React from 'react';
import NavBar from "../components/navBar";
import AppStepper from "../components/stepper";

function Home(props) {
    return (
        <div className="App">
            <NavBar/>
            <header className="App-header">
                <AppStepper/>
            </header>
        </div>
    );
}

export default Home;