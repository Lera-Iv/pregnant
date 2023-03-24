import React from "react";
import './fetal.css';
import Slider from "../Slider/Slider";



const Fetal = ({ onWeekCLick, selectedWeek}) => {

    return (
        <section className="fetalSection container">
            <div className="secContainer">
                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">Pregnancy:    from conceptation to meeting with the baby</h2>
                        <p>So, the test showed two lines, and you are wondering: what does the new life inside of me look like?</p>
                    </div>
                    <Slider onWeekCLick={onWeekCLick} />
                </div>

                <div className="mainContent grid">
                    <div className="singleComponentFetal">
                        <div className="fetalImage">
                            {selectedWeek && <img src={selectedWeek.imgFetal} alt="Fetal" />}
                        </div>
                        <div className="fetalFooter">
                            <h2 className="title">
                                Your baby
                            </h2>
                        </div>
                    </div>
                    <div className="singleComponentFetal">
                        <div className="fetalImage"> 
                        {selectedWeek && <img src={selectedWeek.fetalHowImg} alt="Fetal" />}
                        </div>

                        <div className="fetalFooter">
                            <h2 className="title">
                                Size of {selectedWeek && <>{selectedWeek.fetalHow} </>}
                            </h2>
                        </div>
                    </div>
                    <div className="singleComponentFetal">
                        <div className="fetalImage">
                            {selectedWeek && <img src={selectedWeek.abdomen} alt="Abdomen" />}
                        </div>

                        <div className="fetalFooter">
                            <h2 className="title">
                                Pregnant belly
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Fetal