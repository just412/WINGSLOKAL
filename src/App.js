import React from "react";
import Navbar from "./components/Navbar";
import Menu from './components/Menu';
import Showcase from "./components/Showcase";
import Gallery from "./components/Gallery";
import Order from "./components/Order";
import About from "./components/About";
import BackgroundVid from "./components/Background"
import Flavors from "./components/Flavors";
import OtherMenu from "./components/OtherMenu";
import "./App.css"


function App() {
  return (
    <div id="container">
      <section>
        <Navbar />
        <BackgroundVid />
        <Showcase />
      </section>
      <section><Menu /></section>
      <section><h1>FLAVORS</h1></section>
      <section><Flavors /></section>
      <section><h1>OTHER MENU</h1></section>
      <section><OtherMenu /></section>
      <section><Gallery /></section>
      <section><Order /></section>        
    </div>
  );
}

export default App;
