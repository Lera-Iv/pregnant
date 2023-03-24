import React from "react";
import './about.css';
import img1 from '..//../Assets/about/questions.jpg';
import img2 from '..//../Assets/about/aboutUs.jpg';
import img3 from '..//../Assets/about/phsychologist.jpg';


const About = () => {
    return (
        <div>
            <section className="about section">
                <div className="secContainer">
                    <h2 className="title">
                        Our resources
                    </h2>
                    
                    <div className="mainContent container grid">
                        <div className="singleItem">
                            <img src={img1} alt="Questions" />
                            <h3>Questions</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A est ab fugiat accusamus cupiditate quasi?</p>
                        </div>
                        <div className="singleItem">
                            <img src={img2} alt="Psychologist" />
                            <h3>Psychological help</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A est ab fugiat accusamus cupiditate quasi?</p>
                        </div>
                        <div className="singleItem">
                            <img src={img3} alt="About Us" />
                            <h3>About Us</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A est ab fugiat accusamus cupiditate quasi?</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;