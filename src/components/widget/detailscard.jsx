import { Link } from "react-router-dom";

const WeaveDetailsInfoCard = ({ moreInfo }) => {
  return (
    <>
      <div className="details card">
        <h5>Find out more</h5>
        <br></br>
        {moreInfo.map((x) => {
          return x["weave-details"].map((y) => (
            <>
              <Link to={`/${y.id}`} state={{ data: y }}>
                <img src={`${y.image}`} alt="imgData" key={y} />
              </Link>
              <p>
                {y.weave} | ({x.weave})
              </p>
              <hr></hr>
              <br></br>
            </>
          ));
        })}
      </div>
    </>
  );
};

export default WeaveDetailsInfoCard;
