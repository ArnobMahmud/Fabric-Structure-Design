import { WeavePalette } from "../components/config/palette";
import data from "../json/weave_data.json";
import WeaveCard from "../components/widget/weavecard";

const WeaveScreen = () => {
  return (
    <WeavePalette>
      <div className="App container-fluid">
        <div className="row justify-content-center align-items-center">
          {data.map((e) => (
            <>
              <div className="col-xl-6 col-md-12 col-sm-12">
                <WeaveCard e={e} />
              </div>
            </>
          ))}
        </div>
      </div>
    </WeavePalette>
  );
};
export default WeaveScreen;
