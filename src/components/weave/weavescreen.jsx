import { WeavePalette } from "../config/palette";
import data from "../../json/weave_data.json";
import { Link } from "react-router-dom";

const WeaveScreen = () => {
  return (
    <WeavePalette>
      <div className="App container-fluid">
        <div className="row justify-content-center align-items-center">
          {data.map((e) => (
            <>
              <div className="col-xl-6 col-md-6 col-sm-12">
                <div className="card">
                  <h1>{e.weave}</h1>
                  <div className="card">
                    <ul class="cards">
                      {e["weave-details"].map((f) => (
                        <li className="card">
                          <Link to={`/${f.id}`} state={{ data: f }}>
                            <img src={`${f.image}`} alt="imgData" key={f.id} />
                            <h5>{f.weave}</h5>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </WeavePalette>
  );
};
export default WeaveScreen;
