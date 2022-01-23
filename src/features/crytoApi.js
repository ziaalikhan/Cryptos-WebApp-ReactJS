import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "e2d7fe412dmshe519a26ab324d8ep1cf56cjsna2d70bfe3f66",
};

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoData = createApi({
  reducerPath: "cryptos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),
    getCryptosDetail: builder.query({
      query: (countId) => createRequest(`/coin/${countId}`),
    }),
    getCryptosHistory: builder.query({
      query: ({ coinId, timePeriod }) =>
        createRequest(`coin/${coinId}/history?timeperiod=${timePeriod}`),
    }),
  }),
});

const options = {
  method: "GET",
  url: "https://coinranking1.p.rapidapi.com/coin/Qwsogvtv82FCd/exchanges",

  headers: {
    "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    "x-rapidapi-key": "e2d7fe412dmshe519a26ab324d8ep1cf56cjsna2d70bfe3f66",
  },
};

export default options;

export const {
  useGetCryptosQuery,
  useGetCryptosDetailQuery,
  useGetCryptosHistoryQuery,
} = cryptoData;
