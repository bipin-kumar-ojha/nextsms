import React from "react";
import Header from "./component/Header";
import Banner from "./component/Banner";
import Product from "./component/Product";
import OfferBanner from "./component/OfferBanner";
import Categories from "./component/Categories";
import CategoriesOffer from "./component/CategoriesOffer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <OfferBanner/>
      <Product/>
      <Categories/>
      <CategoriesOffer/>
    </div>
  );
}

export default App;
