import React, { useEffect, useState } from "react";
import "./Exchanges.css";
import axios from "axios";
import options from "../../features/crytoApi";
import { Loader } from "../index";
import { Accordion } from "react-bootstrap";
import millify from "millify";

const Exchanges = () => {
  const [exchangeData, setExchangeData] = useState();

  const getApiData = async () => {
    await axios
      .request(options)
      .then((res) => setExchangeData(res.data))
      .catch((error) => {
        console.error(error.message);
      });
  };

  useEffect(() => {
    getApiData();
  }, []);
  
  const exchange = exchangeData?.data?.exchanges;

  if (!exchange) return <Loader />;

  return (
    <div className="exchange_page">
      <div className="exchange_Main_Heading">
        <div className="exchange_Head">
          <p>Exchanges</p>
          <p>24h Trade Volume</p>
          <p>Market</p>
          <p>Change</p>
        </div>
      </div>
      <div className="exchange_Main">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          {exchange.map((val) => {
            return (
              <>
                <Accordion key={val.uuid} defaultActiveKey="0">
                  <Accordion.Item eventKey={val.id}>
                    <div className="acoordian_heading">
                      <Accordion.Header>
                        <div className="accordian_display">
                          <p>
                            {val.rank}.{" "}
                            <span className="spanImage">
                              <img
                                width={30}
                                height={30}
                                src={val.iconUrl}
                                alt=""
                              />
                            </span>{" "}
                            {val.name}
                          </p>
                          <p>{millify(val["24hVolume"])}</p>
                          <p>{val.numberOfMarkets}</p>
                          <p>{val.name}</p>
                        </div>
                      </Accordion.Header>
                    </div>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exchanges;
