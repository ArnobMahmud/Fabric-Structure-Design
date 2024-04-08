import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../includes/header";
import Footer from "../includes/footer";
import ErrorPage from "../../pages/404";
import WeaveScreen from "../weave/weavescreen";
import WeaveData from "../weave/weavedata";

const RouteHandle = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<WeaveScreen />} />
        <Route path="/:id" element={<WeaveData />} />
        <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteHandle;
