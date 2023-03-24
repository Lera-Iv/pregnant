import React from "react";
import './chekList.css';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/chekList/todoSlice";
import TodoItem from '../TodoItem/TodoItem';
import Preloader from '../Preloader/Preloader';


const ChekList = () => {
    const dispatch = useDispatch();
    const { status, error } = useSelector(state => state.todos);
    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch]);
    const todos = useSelector(state => state.todos.todos);

    return (
        <section className="todoItem container">
            <div className="secContainer">
                <div className="secTitle">Check-list Of your Pregnant</div>
                <div className="mainContainer">
                    {status === 'loading' && <Preloader />}
                    {error && <h2>An Error occerd:{error}</h2>}
                    <div className="titleDiv">
                        <h3>First trimester</h3>
                    </div>
                    <ul>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                    </ul>
                </div>
                <div className="mainContainer">
                    {status === 'loading' && <Preloader />}
                    {error && <h2>An Error occerd:{error}</h2>}
                    <div className="titleDiv">
                        <h3>Second trimester</h3>
                    </div>
                    <ul>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                    </ul>
                </div>
                <div className="mainContainer">
                    {status === 'loading' && <Preloader />}
                    {error && <h2>An Error occerd:{error}</h2>}
                    <div className="titleDiv">
                        <h3>Third trimester</h3>
                    </div>
                    <ul>
                        {todos.map((todo) => (
                            <TodoItem key={todo.id} {...todo} />
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}


export default ChekList