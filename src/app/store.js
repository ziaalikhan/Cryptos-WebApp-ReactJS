import { configureStore } from "@reduxjs/toolkit";
import {cryptoData} from '../features/crytoApi';
import {newsData} from '../features/newsApi';


export const store = configureStore({
  reducer: {
   [cryptoData.reducerPath] : cryptoData.reducer,
   [newsData.reducerPath] : newsData.reducer,
  },
});
