import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const newsApiHeaders = {
  "x-bingapis-sdk": "true",
  "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
  "x-rapidapi-key": "e2d7fe412dmshe519a26ab324d8ep1cf56cjsna2d70bfe3f66",
};
const createRequest = (url) => ({ url, headers: newsApiHeaders });


export const newsData = createApi({
    reducerPath: "news",
    baseQuery: fetchBaseQuery({
      baseUrl: "https://bing-news-search1.p.rapidapi.com",
    }),
    endpoints: (builder) => ({
      getNews: builder.query({
        query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
      }),
    }),
  });
  
  export const { useGetNewsQuery } = newsData;
