import { useParams, useLocation } from "react-router-dom";
import { WeavePalette } from "../config/palette";
import { Link } from "react-router-dom";
import moreInfo from "../../json/weave_data.json";

const WeaveData = () => {
  const params = useParams();
  const refID = params.id;
  const location = useLocation();
  const data = location.state?.data;
  console.log(refID);

  return (
    <WeavePalette>
      <div className="container">
        <div className="row align-items-start justify-content-center">
          <div className="col-xl-8 align-items-center">
            <div className="card">
              <h2>{data.weave}</h2>
              <div className="card">
                <img src={`${data.image}`} alt="imgData" key={data} />
              </div>
              <div className="card">
                <h6>Weave : {data.weave_plan} </h6>
                {refID.startsWith("e", 0) && (
                  <h6>Order of Coloring : {data.ooc}</h6>
                )}
                <h6>Repeat Size : {data.repeat_size} </h6>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="details card">
              <h5>Find out more</h5>
              <br></br>
              {moreInfo.map((x) => {
                return x["weave-details"].map((y) => (
                  <Link to={`/${y.id}`} state={{ data: y }}>
                    <img src={`${y.image}`} alt="imgData" key={y} />
                    <p>{y.weave} | ({x.weave})</p>
                    <hr></hr>
                    <br></br>
                  </Link>
                ));
              })}
            </div>
          </div>
        </div>
      </div>
    </WeavePalette>
  );
};

export default WeaveData;
