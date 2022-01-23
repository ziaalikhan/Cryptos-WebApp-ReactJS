import React, { Fragment, useState } from "react";
import "./News.css";
import "../../App.css";
import { useGetNewsQuery } from "../../features/newsApi";
import { useGetCryptosQuery } from "../../features/crytoApi";
import { Loader } from "../index";
import DemoImage from "../../Images/btc.jpg";
import moment from "moment";

const News = ({ simplified }) => {
  const [selectNews, setselectNews] = useState("Cryptocurrency");
  const { data: cryptoNewsData } = useGetNewsQuery({
    selectNews,
    count: simplified ? 10 : 100,
  });
  const { data } = useGetCryptosQuery(100);

  const cryptoNews_Final_Data = cryptoNewsData?.value;

  if (!cryptoNewsData?.value) return <Loader />;

  return (
    <div className="news_page">
      {!simplified && (
        <div className="selectBox">
          <select
            value={selectNews}
            onChange={(e) => setselectNews(e.target.value)}
          >
            {data?.data?.coins.map((coin, key) => {
              return (
                <Fragment key={key}>
                  <option className="Select_options">{coin.name}</option>;
                </Fragment>
              );
            })}
          </select>
        </div>
      )}

      <div className="newsCard_Container">
        {cryptoNews_Final_Data?.map((val, key) => {
          return (
            <a className="link" href={val.url} target="_blank" key={key}>
              <div className="newsCard">
                <div className="news_Desc_Container">
                  <div className="news_Heading">
                    <p>{val.name.slice(0, 60)}</p>
                  </div>
                  <div className="newsImage">
                    <img
                      src={val.image?.thumbnail?.contentUrl || DemoImage}
                      alt=""
                    />
                  </div>
                </div>
                <div className="news_Desc">
                  <p>
                    {`${val.description.slice(0, 100)}`}
                    <span className="seeMore">See More...</span>
                  </p>
                </div>
                <div className="avatar_Time">
                  <div>
                    <img
                      src={
                        val.provider[0]?.image?.thumbnail?.contentUrl ||
                        DemoImage
                      }
                      alt="Avatar"
                      class="avatar"
                    />
                  </div>
                  <div>
                    <p className="datePublished">
                      {moment(val.datePublished).fromNow()}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default News;
