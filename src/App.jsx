import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import Types from "./components/Types";
import Services from "./components/Services";
import Productsgrid from "./components/Productsgrid";
import Banner from "./components/Banner";
import Review from "./components/Review";
import Insta from "./components/Insta";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <Productsgrid />
      <Banner />
      <Review />
      <Insta />
      <Footer />
    </>
  );
};

export default App;
