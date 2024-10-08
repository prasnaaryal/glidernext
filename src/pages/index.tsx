import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import React from "react";
import Banner from "./components/Banner";
import ContactUs from "./components/ContactUs";
import EmailBox from "./components/EmailBox";
import Faq from "./components/Faq";
import News from "./components/News";
import OurSeminars from "./components/OurSeminars";
import OurServices from "./components/OurServices";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";
import WhyChooseUs from "./components/WhyChooseUs";

const index = () => {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "white" }}>
        <Banner />
        <WhatWeDo />
        <WhoWeAre />
        <EmailBox />
        <OurServices />
        <WhyChooseUs />
        <OurSeminars/>
        <Faq/>
        <News/>
        <ContactUs/>
      </main>
      <Footer />
    </div>
  );
};

export default index;
