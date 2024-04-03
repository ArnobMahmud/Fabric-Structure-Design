import PlainWeave from "../components/weave/plain";
import SatinWeave from "../components/weave/satin";
import TwillWeave from "../components/weave/twill";
import FancyWeave from "../components/weave/fancy";
import ColorEffect from "../components/weave/effect";

const HomePage = () => {
  return (
    <>
      <div className="App container-fluid">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-6 col-md-6 col-sm-12">
            <PlainWeave />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <SatinWeave />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <TwillWeave />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <FancyWeave />
          </div>
          <div className="col-xl-6 col-md-6 col-sm-12">
            <ColorEffect />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
