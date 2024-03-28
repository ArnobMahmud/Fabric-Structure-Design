import React from "react";
import data from "../../json/weave_data.json";
import { WeavePalette } from "../config/palette.jsx";

const TwillWeave = () => {
  return (
    <>
      <WeavePalette>
        <div className="container">
          <div className="card">
            <h1>Twill Weave</h1>
            <div className="card desc row">
              {data.twill.map((e, i) => {
                return (
                  <>
                    <div className="col-xl-12 infocard">
                      <img src={`${e.image}`} alt="imgData" key={i} />
                      <h5>{e.weave}</h5>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </WeavePalette>
    </>
  );
};
export default TwillWeave;
