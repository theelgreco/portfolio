"use client";

import "./globals.css";
import LeftSection from "@/sections/laptop/LeftSection/LeftSection";
import RightSection from "@/sections/laptop/RightSection/RightSection";
import MiddleSection from "@/sections/laptop/MiddleSection/MiddleSection";
import TopSectionMobile from "@/sections/mobile/TopSectionMobile/TopSectionMobile";
import MiddleSectionMobile from "@/sections/mobile/MiddleSectionMobile/MiddleSectionMobile";
import BottomSectionMobile from "@/sections/mobile/BottomSectionMobile/BottomSectionMobile";

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
              <MiddleSection>{children}</MiddleSection>
              <RightSection />
            </>
          ) : (
            <>
              <TopSectionMobile />
              <MiddleSectionMobile>{children}</MiddleSectionMobile>
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
