import React from "react";
import data from "../../json/weave_data.json";
import { WeavePalette } from "../config/palette.jsx";
import { Link } from "react-router-dom";

const ColorEffect = () => {
  return (
    <>
      <WeavePalette>
        <div className="card">
          <h1>Color Effect</h1>
          <div className="card">
            <ul class=" cards">
              {data.effect.map((e, i) => {
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
export default ColorEffect;
