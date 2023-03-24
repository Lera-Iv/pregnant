import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status: null,
    error: null,
}

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async(_, {rejectWithValue}) => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_page=2_limit=10');
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

export const postSice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers:  {
        [getPosts.pending]: (state) => {
            state.status = 'loading';
        },  //вызывается в мемент начала запроса  loading true показыв спинер
        [getPosts.fulfilled]: (state, action) => {
            state.status = 'resolved';
            state.posts = action.payload;
        },// если запрос прошед успешно loading false и сообщение об ошибке
        
        [getPosts.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        },//ошибка
    }
})


export default postSice.reducer