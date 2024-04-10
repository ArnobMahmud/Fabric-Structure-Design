import { Link } from "react-router-dom";

const WeaveCard = ({e}) => {
  return (
    <>
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
    </>
  );
};

export default WeaveCard;
