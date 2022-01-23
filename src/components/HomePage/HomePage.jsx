import React from "react";
import "./HomePage.css";
import "../../App.css";
import millify from "millify";
import { useGetCryptosQuery } from "../../features/crytoApi";
import { Cryptocurrencies, News , Loader} from "../index";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data } = useGetCryptosQuery(10);

  const globalStats = data?.data?.stats;
  if (!data?.data?.stats) {
    return <Loader />;
  }
  return (
    <div className="home_Page">
      <h2 className="heading">Global Crypto States</h2>
      <div className="crypto_detail">
        <div className="crypto_Desc">
          <h5>Total Cryptocurrencies</h5>
          <h6>{globalStats?.total}</h6>
        </div>
        <div className="crypto_Desc">
          <h5>Total Exchanges</h5>
          <h6>{globalStats?.totalExchanges}</h6>
        </div>
        <div className="crypto_Desc">
          <h5>Total Market Cap</h5>
          <h6>{`${millify(globalStats?.totalMarketCap)}`}</h6>
        </div>
        <div className="crypto_Desc">
          <h5>Total 24h Volume</h5>
          <h6>{`${millify(globalStats?.total24hVolume)}`}</h6>
        </div>
        <div className="crypto_Desc">
          <h5>Total Markets</h5>
          <h6>{`${millify(globalStats?.totalMarkets)}`}</h6>
        </div>
      </div>
      <div className="top_Crypto">
        <div className="topCrypto_Heading">
          <p>Top 10 Cryptocurrencies in the World</p>
        </div>
        <div className="topCrypto_showMore">
          <Link className="link" to="/cryptocurrencies">
            <p>Show More</p>
          </Link>
        </div>
      </div>
      <Cryptocurrencies simplified />
      <div className="top_Crypto">
        <div className="topCrypto_Heading">
          <p>Latest Crypto News</p>
        </div>
        <div className="topCrypto_showMore">
          <p>Show More</p>
        </div>
      </div>
      <News simplified />
    </div>
  );
};

export default HomePage;
