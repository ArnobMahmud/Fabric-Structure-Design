import Footer from "./components/includes/footer";
import PlainWeave from "./components/weave/plain";
import TwillWeave from "./components/weave/twill";
import SatinWeave from "./components/weave/satin";
import FancyWeave from "./components/weave/fancy";

const App = () => {
  return (
    <div className="App">
      <div className="row">
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
      </div>
      <Footer />
    </div>
  );
};

export default App;
