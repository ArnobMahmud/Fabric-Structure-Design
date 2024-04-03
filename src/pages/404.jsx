import error from "../components/assets/404.svg";
import { ErrorPalette } from "../components/config/palette";

const ErrorPage = () => {
  return (
    <>
      <ErrorPalette>
        <div className="container-fluid error">
          <img src={error} alt="logo" />
          <h4>No data found!</h4>
        </div>
      </ErrorPalette>
    </>
  );
};

export default ErrorPage;
