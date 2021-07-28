import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.covid19india.org/state_district_wise.json").then(
      (result) => {
        result.json().then((resp) => {
          setData(resp);
        })
      })
  }, []);
  console.warn(data)
  return (
    <div className="App">
      <h1>GET API CALL </h1>
      <table>
        <thead>

        </thead>
        <tbody>
        <tr>
          <td>notes</td>
          <td>active</td>
          <td>confirmed</td>
          <td>migratedother</td>
          <td>deceased</td>
          <td>recovered</td>
          <td>confirmed</td>
          <td>deceased</td>
          <td>recovered</td>
        </tr>
        {
          [data].map((covid) => 
          <tr>
            <td>{covid.notes}</td>
            <td>{covid.active}</td>
            <td>{covid.confirmed}</td>
            <td>{covid.migratedother}</td>
            <td>{covid.deceased}</td>
            <td>{covid.recovered}</td>
            <td>{covid.confirmed}</td>
            <td>{covid.deceased}</td>
            <td>{covid.recovered}</td>
          </tr>
          )
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;
