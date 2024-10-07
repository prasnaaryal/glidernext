import Footer from "@/layouts/footer";
import Header from "@/layouts/header";
import React from "react";
import Banner from "./components/Banner";

const index = () => {
  return (
    <div>
      <Header />
      <main>
        <Banner/>
      </main>
      <Footer />
    </div>
  );
};

export default index;
