import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import React from "react";
import Banner from "./components/Banner";
import EmailBox from "./components/EmailBox";
import OurServices from "./components/OurServices";
import WhatWeDo from "./components/WhatWeDo";
import WhoWeAre from "./components/WhoWeAre";

const index = () => {
  return (
    <div>
      <Header />
      <main style={{ backgroundColor: "white" }}>
        <Banner />
        <WhatWeDo />
        <WhoWeAre />
        <EmailBox/>
        <OurServices/>
      </main>
      <Footer />
    </div>
  );
};

export default index;
