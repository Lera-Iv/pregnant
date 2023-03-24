import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    todos: [],
    status: null,
    error: null,
}

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function(_, {rejectWithValue}) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');

            if(!response.ok) {
                throw new Error('Server Error');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }    
    }
);

export const todoSlise = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        toggleComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id);
            toggledTodo.completed = !toggledTodo.completed;
        }
    }, 
    extraReducers: {
        [fetchTodos.pending]: (state) => {
            state.status = 'loading';
        },  
        [fetchTodos.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.todos = action.payload;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },
    }
});


export const {toggleComplete} = todoSlise.actions;
export default todoSlise.reducer;

