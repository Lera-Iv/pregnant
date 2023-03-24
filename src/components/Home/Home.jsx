import React from "react";
import './home.css';
import MyButton from "../UI/button/MyButton";
import { useDispatch } from "react-redux";
import {setFormActive} from '../../redux/formCalculator/formCalculatorSlice'


const Home = () => {
    const dispatch = useDispatch();

    return (
    <section className="home">
        <div className="secContainer container">
            <div className="homeText">
                
                <h1 className="title" >
                Management of your pregnancy with Pregnant Gide
                </h1>
                
                <p className="subTitle">
                You're pregnant, they're pregnant, you can talk about being pregnant!
                </p>

                <button onClick={(e) => {
                    dispatch(setFormActive())
                }} className="btn">
                    <a href="#">Start Now</a>
                </button>
            </div>
        </div>
    </section>
    )
}

export default Home