import React, { useState } from "react";
import "./CryptoDetails.css";
import { useParams, Link } from "react-router-dom";
import { Loader } from "../index";
import millify from "millify";
import {
  useGetCryptosDetailQuery,
  useGetCryptosHistoryQuery,
} from "../../features/crytoApi";
import { StopOutlined, CheckOutlined } from "@ant-design/icons";
import HTMLReactParser from "html-react-parser";
import LineChart from "../LineChart/LineChart";

const CryptoDetails = () => {
  const [timePeriod, settimePeriod] = useState("7d");
  const { coinId } = useParams();
  const { data } = useGetCryptosDetailQuery(coinId);
  const { data: coinHistory } = useGetCryptosHistoryQuery({
    coinId,
    timePeriod,
  });

  const cryptoDetails = data?.data?.coin;

  console.log(cryptoDetails);
  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  if (!cryptoDetails) return <Loader />;
  //   console.log(coinId);
  return (
    <div className="crypto_detail_page">
      <div className="detailHeading">
        <h3>{`${data?.data?.coin?.name} (${data?.data?.coin?.symbol}) Price`}</h3>
      </div>
      <div className="inner_Heading">
        <p>
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </div>
      <div className="select_Container">
        <select
          defaultValue="7d"
          className="select_timePeriod"
          placeholder="Select Time Period"
          onChange={(e) => settimePeriod(e.target.value)}
        >
          {time.map((date) => (
            <option key={date}>{date}</option>
          ))}
        </select>
      </div>
      <div className="statistic_value">
        <p>{cryptoDetails.name} Value Statistics</p>
      </div>
      {/* LineChart */}
      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.price)}
        coinName={cryptoDetails?.name}
      />
      {/* LineChart */}

      <div className="details_main">
        <div className="value_Statistic">
          <div className="Cryto_detail">
            <p>Price to Usd</p>
            <p>{cryptoDetails?.price && millify(cryptoDetails?.price)} $</p>
          </div>
          <div className="Cryto_detail">
            <p>Rank</p>
            <p>{cryptoDetails?.rank}</p>
          </div>
          <div className="Cryto_detail">
            <p>24h Volume</p>
            <p>{millify(cryptoDetails?.["24hVolume"])}</p>
          </div>
          <div className="Cryto_detail">
            <p>Market Cap</p>
            <p>
              {cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)} $
            </p>
          </div>
          <div className="Cryto_detail">
            <p>All-time-high(daily avg.)</p>
            <p>
              {cryptoDetails?.allTimeHigh?.price &&
                millify(cryptoDetails?.allTimeHigh?.price)}{" "}
              $
            </p>
          </div>
        </div>
        <div className="value_Statistic">
          <div className="Cryto_detail">
            <p>Number Of Markets</p>
            <p>{cryptoDetails?.numberOfMarkets}</p>
          </div>
          <div className="Cryto_detail">
            <p>Number Of Exchanges</p>
            <p>{cryptoDetails?.numberOfExchanges}</p>
          </div>
          <div className="Cryto_detail">
            <p>Aprroved Supply</p>
            <p>
              {cryptoDetails?.supply?.confirmed ? (
                <CheckOutlined />
              ) : (
                <StopOutlined />
              )}
            </p>
          </div>
          <div className="Cryto_detail">
            <p>Total Supply</p>
            <p>
              {cryptoDetails?.supply?.total &&
                millify(cryptoDetails?.supply?.total)}
            </p>
          </div>
          <div className="Cryto_detail">
            <p>Circulating Supply</p>
            <p>
              {cryptoDetails?.supply?.circulating &&
                millify(cryptoDetails?.supply?.circulating)}
            </p>
          </div>
        </div>
      </div>
      {/* Another One */}
      <div className="crypto_Details_Desc">
        <p className="crypto_Details_name">What is {cryptoDetails.name} ?</p>
        <p>{HTMLReactParser(cryptoDetails.description)}</p>
      </div>

      {/* Crypto Links */}
      <div className="crypto_Links_Container">
        <p className="crypto_Details_name">{cryptoDetails.name} Links</p>
      </div>
      <div className="cryptoLinks_main">
        {cryptoDetails.links.map((link) => {
          return (
            <div className="crypto_Links">
              <p>{link.name}</p>
              <a href={link.url} target="_blank">
                {link.url.slice(0,20)}
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CryptoDetails;

// <table>
//           <tr>
//             <th>Social Media</th>
//             <th>Links</th>
//           </tr>
//  {cryptoDetails.links.map((link) => {
//    return (
//      <tbody>
//        <td>{link.type}</td>
//        <a href={link.url} target="_blank">
//          <td>{link.url}</td>
//        </a>
//      </tbody>
//    );
//  })}
//         </table>
