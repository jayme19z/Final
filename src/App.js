import React from "react";
import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Cart } from "./pages/Cart";

import { useSelector, useDispatch } from "react-redux";

import "./scss/app.scss";

export const searchContext = React.createContext();

function App() {
  const [searchType, setSearchType] = React.useState("");


  return (
    <div className="App">
      <div className="wrapper">
        <searchContext.Provider value={{ searchType, setSearchType }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </searchContext.Provider>
      </div>
    </div>
  );
}

export default App;
