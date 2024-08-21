import { Route, Router, Routes } from "react-router-dom";
import AllPost from "./components/AllPost";
import Categories from "./components/Categories";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ListOf from "./components/ListOf";
import Navbar from "./components/Navbar";
import OurMision from "./components/OurMision";
import TestimonialCard from "./components/TestimonialCard";
import WhyWeStarted from "./components/WhyWeStarted";
import Blog from "./components/Blog/Blog";
import JoinUs from "./components/JoinUs";
import AboutUs from "./components/AboutUs/AboutUs";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivacyPolicy from "./components/privacy/PrivacyPolicy";

const App = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="pt-20 p-6">
                  <HeroSection />
                  <div className="md:flex lg:w-full">
                    <FeaturedPost />
                    <AllPost />
                  </div>
                  <OurMision />
                  <Categories />
                  <WhyWeStarted />
                  <ListOf />
                  <TestimonialCard />
                  <JoinUs />
                </div>
              </>
            }
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />}/>
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
