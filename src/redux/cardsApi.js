import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cardsApi = createApi({
    reducerPath: "cardsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
    endpoints: (build) => ({
        checkCardInfo: build.mutation({
            query: (body) => ({
                url: "card/status",
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
