import React from "react";
import data from "../../json/weave_data.json";
import { WeavePalette } from "../config/palette.jsx";
import { Link } from "react-router-dom";

const SatinWeave = () => {
  return (
    <>
      <WeavePalette>
        <div className="card">
          <h1>Satin Weave</h1>
          <div className="card">
            <ul class=" cards">
              {data.satin.map((e, i) => {
                return (
                  <>
                    <li className="card">
                      <Link to={`/info/${e.id}`} state={{ data: e }}>
                        <img src={`${e.image}`} alt="imgData" key={i} />
                        <h5>{e.weave}</h5>
                      </Link>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </WeavePalette>
    </>
  );
};
export default SatinWeave;