import data from "../../json/weave_data.json";
import { Link } from "react-router-dom";

const Sugession4 = () => {
  return (
    <>
      <div className="container">
        {data.satin.map((e, i) => {
          return (
            <Link to={`/info/${e.id}`} state={{ data: e }}>
              <img src={`${e.image}`} alt="imgData" key={i} />
              <h5>{e.weave}</h5>
              <hr></hr>
              <br></br>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Sugession4;