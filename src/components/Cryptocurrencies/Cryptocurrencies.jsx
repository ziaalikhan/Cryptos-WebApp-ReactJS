import React, { useEffect, useState } from "react";
import "./Cryptocurrencies.css";
import "../../App.css";
import { useGetCryptosQuery } from "../../features/crytoApi";
import { Loader } from "../index";
import millify from "millify";
import { Link } from "react-router-dom";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchItem, setsearchItem] = useState("");

  useEffect(() => {
    const filterItem = cryptoList?.data?.coins.filter((val) =>
      val.name.toLowerCase().includes(searchItem.toLowerCase())
    );
    setCryptos(filterItem);
  }, [cryptoList, searchItem]);

  if (!cryptoList?.data?.coins) return <Loader />;

  return (
    <div className="cryptocurrencies_page">
      {!simplified && (
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search Your Cryptocurrency"
            onChange={(e) => setsearchItem(e.target.value)}
          />
        </div>
      )}

      <div className="cryptoCard_main">
        {cryptos?.map((val) => {
          return (
            <Link className="link" key={val.uuid} to={`/crypto/${val.uuid}`} >
              <div className="cards">
                <div className="name_image">
                  <div className="name">
                    <p>
                      {val.rank}.{val.name}
                    </p>
                  </div>
                  <div className="image">
                    <img src={val.iconUrl} alt="icon" />
                  </div>
                </div>
                <div className="desc">
                  <p>Price : {`${millify(val.price)} (USD)`}</p>
                  <p>Market Cap : {millify(val.marketCap)}</p>
                  <p>Daily Change : {millify(val.change)}%</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cryptocurrencies;
