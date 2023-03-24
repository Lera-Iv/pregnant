import React from "react";
import './todoItem.css';
import { useDispatch } from "react-redux";
import {toggleComplete} from '../../redux/chekList/todoSlice'

const TodoItem = ({title, completed, id}) => {
    const dispatch = useDispatch();

    return (
        <li>
                <input className="custom-checkbox"
                type='checkbox'
                checked={completed}
                readOnly
                onChange={() => dispatch(toggleComplete({id}))}
                />   
                <label>{title}</label>
            

        </li>
    )
};

export default TodoItem