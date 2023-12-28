import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const cardNumberSlice = createSlice({
    name: "number",
    initialState,
    reducers: {
        changeNumber: (state, { payload }) => {
            return payload;
        },
    },
});

export const { actions, reducer } = cardNumberSlice;
