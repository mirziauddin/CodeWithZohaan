import React, { useEffect, useState } from "react";
import "./covid.css";

const Covid = () => {
  const [data,setData]= useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualdata = await res.json();
      console.log(actualdata.statewise[0]);
      setData(actualdata.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
      getCovidData();
  }, []);

  return (
    <>
    <div className="container">
      <h1 >* Live</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>
      </div>
      <section className="card-section">
        <div className="card card-back card-blue">
          <div className="card-main">
            <div className="card-inner"></div>
            <p className="card-name">
              <span>OUR</span>
              COUNTRY
            </p>
            <p className="card-total card-small">INDIA</p>
          </div>
        </div>
        <div className="card card-back card-green">
          <div className="card-main">
            <div className="card-inner"></div>
            <p className="card-name">
              <span>Total</span>
              RECOVERED
            </p>
            <p className="card-total card-small">{data.recovered}</p>
          </div>
        </div>
        <div className="card card-back card-began">
          <div className="card-main">
            <div className="card-inner"></div>
            <p className="card-name">
              <span>Total</span>
              CONFIRMED
            </p>
            <p className="card-total card-small">{data.confirmed}</p>
          </div>
        </div>
        <div className="card card-back card-red">
          <div className="card-main">
            <div className="card-inner"></div>
            <p className="card-name">
              <span>Total</span>
              DEATHS
            </p>
            <p className="card-total card-small">{data.deaths}</p>
          </div>
        </div>
        
        <div className="card card-back card-yellow">
          <div className="card-main">
            <div className="card-inner"></div>
            <p className="card-name">
              <span>Total</span>
              ACTIVE
            </p>
            <p className="card-total card-small">{data.active}</p>
          </div>
        </div>
        <div className="card card-back card-black">
          <div className="card-main">
            <div className="card-inner"></div>
            <p className="card-name">
              <span>Last</span>
              UPDATED
            </p>
            <p className="card-total card-small">{data.lastupdatedtime}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Covid;
