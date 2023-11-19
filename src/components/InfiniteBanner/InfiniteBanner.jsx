import styles from "./InfiniteBanner.module.css";
import { useRef, useEffect } from "react";

export default function InfiniteBanner() {
  const banner = useRef();
  const P1 = useRef();
  const P2 = useRef();

  useEffect(() => {
    // text animation settings
    const P1_KEYFRAMES = [{ left: "-95%" }, { left: "0%" }];
    const P2_KEYFRAMES = [{ left: "0%" }, { left: "95%" }];
    const TIMING = {
      fill: "forwards",
      duration: 5000,
      iterations: Infinity,
      easing: "linear",
    };

    // start animations
    const P1_ANIMATION = P1.current.animate(P1_KEYFRAMES, TIMING);
    const P2_ANIMATION = P2.current.animate(P2_KEYFRAMES, TIMING);

    banner.current.addEventListener("mouseenter", () => {
      P1_ANIMATION.pause();
      P2_ANIMATION.pause();
    });

    banner.current.addEventListener("mouseleave", () => {
      P1_ANIMATION.play();
      P2_ANIMATION.play();
    });
  }, []);

  return (
    <div className={styles.banner} id="banner" ref={banner}>
      <p ref={P1}>
        THE TIME IS <span>23:24</span>{" "}
        <span className={styles.asterisk}>*</span> THE DATE IS{" "}
        <span>SUNDAY SEP 27TH 2023</span>{" "}
        <span className={styles.asterisk}>*</span> THIS SITE HAS{" "}
        <span>0 LIKES</span>
      </p>
      <p ref={P2}>
        THE TIME IS <span>23:24</span>{" "}
        <span className={styles.asterisk}>*</span> THE DATE IS{" "}
        <span>SUNDAY SEP 27TH 2023</span>{" "}
        <span className={styles.asterisk}>*</span> THIS SITE HAS{" "}
        <span>0 LIKES</span>
      </p>
    </div>
  );
}
