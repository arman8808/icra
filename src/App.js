import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Components/Footer/Footer";
import { lazy, Suspense, useEffect, useState } from "react";
import Loader from "./Components/Loader/Loader";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const OurService = lazy(() => import("./Pages/OurService/OurService"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const SingleBlog = lazy(() => import("./Pages/Blog/SingleBlog"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));

function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.onscroll = function () {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  }, []);
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
          path="/"
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <AboutUs />
            </Suspense>
          }
          path="/aboutus"
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <OurService />
            </Suspense>
          }
          path="/ourservice"
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <ContactUs />
            </Suspense>
          }
          path="/contactUs"
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <Blog />
            </Suspense>
          }
          path="/blog"
        />
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <SingleBlog />
            </Suspense>
          }
          path="/blog/:singleblog"
        />{" "}
        <Route
          element={
            <Suspense fallback={<Loader />}>
              <ErrorPage />
            </Suspense>
          }
          path="*"
        />
      </Routes>

      {scrolled && (
        <div className=" w-full relative rounded-md sticky right-[1rem] bottom-4 pr-4 flex items-end justify-end">
          <div
            className="w-fit bg-white  border-2 rounded-md "
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <dotlottie-player
              src="Animation - 1729754390075.json"
              background="transparent"
              speed="1"
              style={{ width: "3rem", height: "3rem" }}
              direction="1"
              playMode="normal"
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      )}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
