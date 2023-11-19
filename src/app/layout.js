"use client";

import "./globals.css";
import LeftSection from "./components/sections/laptop/LeftSection/LeftSection";
import RightSection from "./components/sections/laptop/RightSection/RightSection";
import MiddleSection from "./components/sections/laptop/MiddleSection/MiddleSection";
import TopSectionMobile from "./components/sections/mobile/TopSectionMobile/TopSectionMobile";
import MiddleSectionMobile from "./components/sections/mobile/MiddleSectionMobile/MiddleSectionMobile";
import BottomSectionMobile from "./components/sections/mobile/BottomSectionMobile/BottomSectionMobile";
import Home from "./components/pages/Home/Home";

import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [mobile, setMobile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(Home);

  useEffect(() => {
    handleResize();
    setIsLoading(false);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setMobile(window.matchMedia("(width <= 1350px)").matches);
  }

  return (
    <html lang="en">
      <body>
        {!isLoading ? (
          !mobile ? (
            <>
              <LeftSection
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <MiddleSection currentPage={currentPage} />
              <RightSection />
            </>
          ) : (
            <>
              <TopSectionMobile />
              <MiddleSectionMobile currentPage={currentPage} />
              <BottomSectionMobile />
            </>
          )
        ) : (
          <></>
        )}
      </body>
    </html>
  );
}
