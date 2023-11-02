import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchNews = createAsyncThunk('news/fetchNews', async (skip) => {
  const response = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`);
  const data = await response.json();
  return data;
});

const newsSlice = createSlice({
  name: 'news',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.push(...action.payload.posts);
    });
  },
});

export const selectNews = state => state.news;

export default newsSlice.reducer;
