import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PageOne from "./components/1.2_pages/Page01.jsx";
import PageTwo from "./components/1.2_pages/Page02.jsx";
import PageThree from "./components/1.2_pages/Page03.jsx";
import Layout from "./components/Layout.jsx";

const router = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<App />} />
      </Route>
      <Route path="/page01" element={<Layout />}>
        <Route index element={<PageOne />} />
      </Route>
      <Route path="/page02" element={<Layout />}>
        <Route index element={<PageTwo />} />
      </Route>
      <Route path="/page03" element={<Layout />}>
        <Route index element={<PageThree />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(router, document.getElementById("root"));
