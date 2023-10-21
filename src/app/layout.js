"use client";

import "./globals.css";
import LeftSection from "./components/sections/laptop/LeftSection/LeftSection";
import RightSection from "./components/sections/laptop/RightSection/RightSection";
import MiddleSection from "./components/sections/laptop/MiddleSection/MiddleSection";
import TopSectionMobile from "./components/sections/mobile/TopSectionMobile/TopSectionMobile";
import MiddleSectionMobile from "./components/sections/mobile/MiddleSectionMobile/MiddleSectionMobile";
import BottomSectionMobile from "./components/sections/mobile/BottomSectionMobile/BottomSectionMobile";

import { useEffect, useState } from "react";

export default function RootLayout({ children }) {
  const [mobile, setMobile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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
              <LeftSection />
              <MiddleSection children={children} />
              <RightSection />
            </>
          ) : (
            <>
              <TopSectionMobile />
              <MiddleSectionMobile children={children} />
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
