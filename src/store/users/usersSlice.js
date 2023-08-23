import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const url = 'https://randomuser.me/api/?results=5';

export const fetchUsers = createAsyncThunk('user/fetchUsers', async (_, rejectedWithValue) => {
    try {
      const response = await axios.get(url);
      return response.data.results;
    } catch (error) {
      return rejectedWithValue(error.message);
    }
  });

const usersSlice = createSlice({
    name: 'user',
    initialState: {
      users: [],
      isLoading: false,
      error: undefined,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
          })
          .addCase(fetchUsers.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
          });
      },
})


export default usersSlice.reducer;