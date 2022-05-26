import React from "react";
import Layout from "./pages/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Beer from "./components/Beer/Beer";
import Beers from "./components/Beers/Beers";
import Search from "./components/Search/Search";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import Fourzerofour from "./components/404/Fourzerofour";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="beers" element={<Beers />} />
          <Route path="beers/:id" element={<Beer />} />
          <Route path="search/:search" element={<Search />} />
          <Route path="aboutUs" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="404" element={<Fourzerofour />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
