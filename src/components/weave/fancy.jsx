import React from "react";
import data from "../../json/weave_data.json";
import { WeavePalette } from "../config/palette.jsx";

const FancyWeave = () => {
  return (
    <>
      <WeavePalette>
        <div className="container">
          <div className="card">
            <h1>Fancy Weave</h1>
            <div className="card desc row">
            {data.fancy.map((e, i) => {
                return (
                  <>
                    <div className="infocard row">
                      <div className="col-xl-12 col-md-12 col-sm-12">
                        <img src={`${e.image}`} alt="imgData" key={i} />
                      </div>
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
export default FancyWeave;
