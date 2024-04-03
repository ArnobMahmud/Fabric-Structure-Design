import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../../pages/home";
import Header from "../includes/header";
import Footer from "../includes/footer";
import DetailsPage from "../../pages/details";
import ErrorPage from "../../pages/404";

const RouteHandle = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:weaveId" element={<DetailsPage />} />
        <Route exact path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouteHandle;
