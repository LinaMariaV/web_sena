import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import store from "./store";
import AuthValidator from "./authValidator";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { Provider } from "react-redux";

// Pages
import Layout from "./pages/layout/Layout";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import TripsAdmin from "./pages/admin/Trips_admin";
import TripsClient from "./pages/client/Trips_client";
import Register from "./pages/register/Register";
import Destinations from "./pages/destinations/Destinations";
import Info from "./pages/info/Info"; 
import NoPage from "./pages/nopage/NoPage";
import CitiesAdmin from "./pages/admin/cities_admin";
import Useradmin from "./pages/admin/users_admin";

// Fontawesome
library.add(fas, fab, far);
// ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <AuthValidator />
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/users_admin" element={<Useradmin />} />
            <Route path="/trips_client" element={<TripsClient />} />
            <Route path="/trips_admin" element={<TripsAdmin />} />
            <Route path="/cities_admin" element={<CitiesAdmin/>} />
            <Route path="/info" element={<Info/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
