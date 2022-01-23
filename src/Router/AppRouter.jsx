import React from "react";
import {
  Navbar,
  HomePage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "../components/index";
import { Routes, Route } from "react-router-dom";

const AppRouter = () => {
  return (
    <div>
      <div>
        <Navbar />
        {/* <Sidebar /> */}
      </div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="/crypto/:coinId" element={<CryptoDetails />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
