import React from "react";
import './todoItem.css';
import { useDispatch } from "react-redux";
import { toggleStatus } from '../../redux/chekList/todoSlice'

const TodoItem = ({ title, completed, id }) => {
    const dispatch = useDispatch();

    return (
        <li>
            <input className="custom-checkbox"
                id={id}
                type='checkbox'
                checked={completed}
                onChange={() => dispatch(toggleStatus(id))}
            />
            <label for={id}>{title}</label>


        </li>
    )
};

export default TodoItem