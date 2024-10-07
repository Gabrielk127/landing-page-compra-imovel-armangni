"use client";

import Header from "@/components/Sections/Header";
import SectionOne from "@/components/Sections/SectionOne";
import SectionTwo from "@/components/Sections/SectionTwo";
import SectionThree from "@/components/Sections/SectionThree";
import SectionFour from "@/components/Sections/SectionFour";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-custom-background">
      <div className="min-h-screen ">
        <Header />
        <div className="bg-custom-background-two">
          <SectionOne />
        </div>
        <div className="bg-custom-background">
          <SectionTwo />
        </div>

        <div className="bg-custom-background">
          <SectionThree />
        </div>

        <div className="bg-custom-background-two">
          <SectionFour />
        </div>
      </div>
      <Footer />
    </div>
  );
}
