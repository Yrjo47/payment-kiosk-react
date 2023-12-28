import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

export const totalSlice = createSlice({
    name: "total",
    initialState,
    reducers: {
        changeTotal: (state, { payload }) => {
            return payload;
        },
    },
});

export const { actions, reducer } = totalSlice;
