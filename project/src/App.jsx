import React from "react";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Products from "./components/products/Products";
import Furniture from "./components/furniture/Furniture";
import Slider from "./components/slider/Slider";

function App() {
  const page = "home"
  return (
    <>
      <header className="nav-section">
        <Nav />
        <Hero />
      </header>
      <Gallery />
      <Products page={page}/>
      <Slider />
      <Furniture />
      <Footer />
    </>
  );
}

export default App;
