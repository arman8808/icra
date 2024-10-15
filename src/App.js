import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import OurService from "./Pages/OurService/OurService";
import Blog from "./Pages/Blog/Blog";
import SingleBlog from "./Pages/Blog/SingleBlog";
import NavBar from "./Components/NavBar/NavBar";
import ContactUs from "./Pages/ContactUs/ContactUs";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <ScrollToTop/>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AboutUs />} path="/aboutus" />
        <Route element={<OurService />} path="/ourservice" />
        <Route element={<ContactUs />} path="/contactUs" />
        <Route element={<Blog />} path="/blog" />
        <Route element={<SingleBlog />} path="/blog/:singleblog" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
