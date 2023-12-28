import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { cardsApi } from "./cardsApi";
import { reducer as totalReducer } from "./totalSlice";
import { reducer as numberReducer } from "./cardNumberSlice";

const reducers = combineReducers({
    [cardsApi.reducerPath]: cardsApi.reducer,
    total: totalReducer,
    number: numberReducer,
});

export const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cardsApi.middleware),
});
