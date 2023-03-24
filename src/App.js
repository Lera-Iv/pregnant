import React, { useEffect, useState } from "react";
import './app.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { fetchPregnant } from './utils/fetchPregnant';
import Fetal from "./components/Fetal/Fetal";
import FormCalculator from "./components/FormCalculator/FormCalculator";
import Preloader from "./components/Preloader/Preloader";



const App = () => {
    const [pregnant, setPregnant] = useState(null);
    const [selectedWeek, setSelectedWeek] = useState(null);

    useEffect(() => {
        fetchPregnant().then(({ pregnacy: weeks }) => {
            setPregnant(weeks);
            setSelectedWeek(weeks.find(({ id }) => {
                return id === 1;
            }))
        });
    }, []);

    const handleWeekClick = (weekNumber) => {
        setSelectedWeek(pregnant.find(({ id }) => {
            return id === weekNumber;
        }))
    }
    
    return (
        <>
            <Navbar />
            {pregnant ? <Home /> : <Preloader />}
            <FormCalculator pregnantAgeUser={handleWeekClick}></FormCalculator>
            <Fetal selectedWeek={selectedWeek} onWeekCLick={handleWeekClick} />
        </>
    )
}

export default App