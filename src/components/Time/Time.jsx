"use client";
import styles from "./Time.module.css";
import { useEffect, useState, useRef } from "react";

export default function Time() {
  const hourSpan = useRef();
  const minutesSpan = useRef();
  const [hour, setHour] = useState(null);
  const [minutes, setMinutes] = useState(null);

  useEffect(() => {
    setHour(new Date().getHours());
    setMinutes(new Date().getMinutes());

    const interval = setInterval(() => {
      const currentHour = new Date().getHours();
      const currentMinutes = new Date().getMinutes();

      if (currentHour !== hour) setHour(currentHour);
      if (currentMinutes !== minutes) setMinutes(currentMinutes);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (hour !== null || minutes !== null) {
      hourSpan.current.innerText = hour < 10 ? `0${hour}` : `${hour}`;
      minutesSpan.current.innerText =
        minutes < 10 ? `0${minutes}` : `${minutes}`;
    }
  }, [hour, minutes]);

  return (
    <h2 className={styles.time}>
      <span ref={hourSpan}></span>
      <span>:</span>
      <span ref={minutesSpan}></span>
    </h2>
  );
}
