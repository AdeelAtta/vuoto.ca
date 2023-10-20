import { useEffect, useContext } from "react";
import HeroSection from "@/components/HeroSection";
import About from "@/components/About";
import Teams from "@/components/Teams";
import Partner from "@/components/Partner";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import SubcribeBox from "@/components/common/SubscribeBox";
import MetaData from "@/components/common/MetaData";
const Home = () => {

  const metaData = MetaData({
    title: "VUOTO - Your Trusted Crypto Tax Specialists in Montreal, Quebec, Canada",
    description: "VUOTO is your premier crypto tax reporting service based in Montreal, Quebec, Canada. Our founder and accountant, Marco, uses licensed professional software by Koinly for CPAs to produce comprehensive crypto and NFT tax reports for your personal income tax declarations.",
    path: "",
    imageSrc: "images/metadata/vuoto.png",
    keywords: "VUOTO, crypto tax specialist, Montreal, Quebec, Canada, crypto tax reporting, Koinly, CPAs, NFT tax reports, personal income tax, cryptocurrency tax, crypto taxation, tax compliance, blockchain taxation, digital asset tax, tax planning, tax services, crypto financial consulting, crypto accounting"
}
)

  return (
    <>
      {metaData}
      <HeroSection />

      <About />

      <Teams />

      <Partner />

      <Testimonial />

      <Faq />

      <Contact />

      <SubcribeBox />

    </>
  )
}
export default Home