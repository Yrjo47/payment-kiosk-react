import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
    reducerPath: "cardsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:5000",
        mode: "no-cors",
    }),
    endpoints: (build) => ({
        checkCardInfo: build.mutation({
            query: (body) => ({
                url: "card/details",
                method: "POST",
                body,
            }),
        }),
        payCard: build.mutation({
            query: (body) => ({
                url: "card/payment",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useCheckCardInfoMutation, usePayCardMutation } = cardsApi;
