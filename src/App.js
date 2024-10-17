import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Components/Footer/Footer";
import { lazy, Suspense } from "react";
const Home = lazy(() => import("./Pages/Home/Home"));
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"));
const OurService = lazy(() => import("./Pages/OurService/OurService"));
const Blog = lazy(() => import("./Pages/Blog/Blog"));
const SingleBlog = lazy(() => import("./Pages/Blog/SingleBlog"));
const ContactUs = lazy(() => import("./Pages/ContactUs/ContactUs"));

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <Home />
            </Suspense>
          }
          path="/"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <AboutUs />
            </Suspense>
          }
          path="/aboutus"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <OurService />
            </Suspense>
          }
          path="/ourservice"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <ContactUs />
            </Suspense>
          }
          path="/contactUs"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <Blog />
            </Suspense>
          }
          path="/blog"
        />
        <Route
          element={
            <Suspense
              fallback={
                <div className="flex items-center justify-center w-full h-[30rem]">
                  <div class="loader"></div>
                </div>
              }
            >
              <SingleBlog />
            </Suspense>
          }
          path="/blog/:singleblog"
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
