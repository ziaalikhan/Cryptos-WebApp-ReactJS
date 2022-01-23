import React from "react";
import "./LineChart.css";
import { Line } from "react-chartjs-2";

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  //   empty Array for the coinPrice we push it from the map
  let coinPrice = [];
  //   empty Array for the coinTimeStamp we push it from the map
  let coinTimeStamp = [];

  // Loop over the array and get the actaual Price from it..
  coinHistory?.data?.history.map((val) => {
    return coinPrice.push(val.price), coinTimeStamp.push(val.timestamp);
  });

  const data = {
    labels: coinTimeStamp,
    datasets: [
      {
        label: `Price of ${coinName} In Usd`,
        data: coinPrice,
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div>
      <div className="coin_desc">
        <p>Coin Name : {coinName}</p>
        <p>
          History of {coinName} : {coinHistory?.data?.change} %
        </p>
        <p>
          Current {coinName} Price : {currentPrice} $
        </p>
      </div>
      <div className="lineChart">
        <Line data={data} />
      </div>
    </div>
  );
};

export default LineChart;
