import React, { useState } from "react";
import './formCalculator.css';
import { IoIosCloseCircle } from 'react-icons/io';
import { useDispatch, useSelector } from "react-redux";
import { setFormNotActive } from '../../redux/formCalculator/formCalculatorSlice';
import { useForm } from 'react-hook-form';




const FormCalculator = ({ pregnantAgeUser }) => {
    const [lastPeriod, setLastPeriod] = useState('');
    const [weeks, setWeeks] = useState();
    const [days, setDays] = useState();
    const [showResult, setShowResult] = useState(false);
    const today = new Date();
    const dispatch = useDispatch();
    const formActive = useSelector((state) => state.form.formActive);

    const setScrollBy = () => {
        window.scrollBy(0, 480);
    };

    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
    } = useForm({
        mode: 'all'
    });

    const onSubmit = (data) => {
        setLastPeriod(lastPeriod);
    }


    const getFullDate = () => {
        const day = ('0' + today.getDate()).slice(-2);
        const month = ('0' + (today.getMonth() + 1)).slice(-2);
        const year = today.getFullYear();
        const todaysDate = `${month}-${day}-${year}`;
        return todaysDate;
    }

    const calculatePregnancy = () => {
        const todaysDate = getFullDate();
        const diffInMs = new Date(todaysDate) - new Date(lastPeriod);
        const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
        return diffInDays;
    }

    const calculate = () => {
        const time = calculatePregnancy();
        const weeksPreg = Math.floor(time / 7);
        const daysPreg = Math.floor(time % 7);

        const daysToAdd = (weeksPreg * 7) + daysPreg;
        const totalDaysToAdd = 280 - daysToAdd;
        today.setDate(today.getDate() + totalDaysToAdd);

        setWeeks(weeksPreg);
        setDays(daysPreg);
        setShowResult(true);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className={formActive}>
            <div className="genderDiv">
                <h2 className="title">Pregnancy Calculator</h2>
                <label htmlFor="gender">Choose gender of the child</label>
                <select>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select>
            </div>
            <div className="periodDiv">
                <label htmlFor="period">First day of your last period</label>
                <input  {...register('lastPeriod', {
                    required: 'Please, enter valid Date!',
                    onChange: ({ target: { value } }) => setLastPeriod(value)
                })} type='date' />
            </div>

            {errors?.lastPeriod && <p style={{ color: 'red' }}>{errors.lastPeriod?.message || 'Error'}</p>}
            <button type='submit' disabled={!isValid} onClick={calculate} className="btn">Calculate</button>

            <div onClick={(e) => { dispatch(setFormNotActive()) }} className="closeForm">
                <IoIosCloseCircle className="icon" />
            </div>
            {showResult && (
                <div>
                    <div className="resultOfCalculate">
                        <p>Congratulations! You are {weeks} weeks and {days} days pregnant </p>
                        <button onClick={() => { pregnantAgeUser(weeks); dispatch(setFormNotActive()); setShowResult(false); setScrollBy() }} className="btn">Continue</button>
                    </div>
                </div>
            )}
        </form>

    )
}

export default FormCalculator