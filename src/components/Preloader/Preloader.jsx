import React from "react";
import preloderImg from '../../Assets/preloader.gif';
import './preloader.css';

const Preloader = () => {
    return (
    <section className='SecPreloader'>
        <div className="preloader">
            <img src={preloderImg} alt='preloader'/>
        </div>
        
    </section>
    )
};

export default Preloader

