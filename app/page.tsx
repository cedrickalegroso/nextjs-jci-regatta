import Head from "next/head";
import Navbar from "./components/navbar";
import AboutUs from "./components/aboutus";
import Awards from "./components/awards";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Logos from "./components/logos";
import Marquee from "./components/marquee";
import Partners from "./components/partners";
import People from "./components/people";
import SiteScripts from "./components/scripts";
import Story from "./components/story";
import Timeline from "./components/timeline";
import Work from "./components/works";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Logos />
      <AboutUs />
      <Timeline />
      <Marquee />
      <Work />
      <Story />
      <Awards />
      <People />
      <Partners />
      <Footer />
      <SiteScripts />
    </>
  );
}
