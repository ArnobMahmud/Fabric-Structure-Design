import { useParams, useLocation } from "react-router-dom";
import { WeavePalette } from "../components/config/palette";
import Sugession1 from "../components/widgets/sugession1";
import Sugession2 from "../components/widgets/sugession2";
import Sugession3 from "../components/widgets/sugession3";
import Sugession4 from "../components/widgets/sugession4";
import Sugession5 from "../components/widgets/sugession5";

const DetailsPage = () => {
  const params = useParams();
  const weaveId = params.weaveId;
  const location = useLocation();
  const data = location.state?.data;
  return (
    <WeavePalette>
      <div className="container-fluid">
        <div className="row align-items-start justify-content-center">
          <div className="col-xl-8 align-items-center">
            <div className="card">
              <h2>{data.weave}</h2>
              <div className="card">
                <img src={`${data.image}`} alt="imgData" key={data} />
              </div>
              <div className="card">
                <h6>Weave : {data.weave_plan} </h6>
                {weaveId.startsWith("e", 0) && (
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
              {(weaveId.startsWith("p", 0) && <Sugession1 />) ||
                (weaveId.startsWith("t", 0) && <Sugession2 />) ||
                (weaveId.startsWith("f", 0) && <Sugession3 />) ||
                (weaveId.startsWith("s", 0) && <Sugession4 />) ||
                (weaveId.startsWith("e", 0) && <Sugession5 />)}
            </div>
          </div>
        </div>
      </div>
    </WeavePalette>
  );
};

export default DetailsPage;
