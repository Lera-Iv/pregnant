import React, { useRef, useState } from "react";
import './slider.css';
const WEEKS = new Array(40).fill(1).map((_, index) => index + 1)


const Slider = ({ onWeekCLick }) => {
    const slider = useRef(null);
    const [prev, setPrev] = useState(false);
    const [next, setNext] = useState(false);
    const [activeElSlider, setActiveElSlider] = useState(1);
    const [position, setPosition] = useState(-500);


    const prevHandler = () => {
        if (position === -500) {
            setPrev(true);
        } else {
            setPosition(position + 500)
            setPrev(false); 
            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position + 1000}px)`
            })
        }
    }

    const nextHandler = () => {
        if (position <= -(WEEKS.length - 6) * 110) {
            setNext(false);
        } else {
            setNext(false);
            setPrev(false);
            setPosition(position - 500);
            slider.current.childNodes.forEach((element) => {
                element.style = `transform: translateX(${position}px)`
            })
        }
    }

    const activeElemSlider = (item) => {
        setActiveElSlider(item);
    }


    return (
        <section className="secSlider">
            <div className="sliderTrack flex" ref={slider}>
                {WEEKS.map((item) => {
                    return (
                        <div key={item} className={activeElSlider === item ? 'sliderItem active' : 'sliderItem'} onClick={() => { activeElemSlider(item); onWeekCLick(item) }} >{item}</div>
                    )
                })}
            </div>
            <button onClick={prevHandler} disabled={prev} className='btnPrev'>{`<`}</button>
            <button onClick={nextHandler} disabled={next} className='btnNext'>{`>`}</button>
        </section>
    )
}

export default Slider