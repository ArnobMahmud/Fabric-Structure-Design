import data from "../../json/weave_data.json";
import { Link } from "react-router-dom";

const Sugession1 = () => {
  return (
    <>
      {data.plain.map((e, i) => {
        return (
          <Link to={`/${e.id}`} state={{ data: e }}>
            <img src={`${e.image}`} alt="imgData" key={i} />
            <h5>{e.weave}</h5>
            <hr></hr>
            <br></br>
          </Link>
        );
      })}
    </>
  );
};

export default Sugession1;
