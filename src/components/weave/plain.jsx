import React from "react";
import data from "../../json/weave_data.json";
import { WeavePalette } from "../config/palette.jsx";

const PlainWeave = () => {
  return (
    <>
      <WeavePalette>
        <div className="card">
          <h1>Plain Weave</h1>
          <div className="card">
            <ul class=" cards">
              {data.plain.map((e, i) => {
                return (
                  <>
                    <li className="card">
                      <img src={`${e.image}`} alt="imgData" key={i} />
                      <h5>{e.weave}</h5>
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

export default PlainWeave;
