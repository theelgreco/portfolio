"use client";
import styles from "./Widget.module.css";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
const heightLookup = {
  690: 3,
  800: 6,
  930: 9,
};

export default function Widget({
  width,
  height,
  title,
  contentStyle,
  flexStyle,
  data,
  Child,
  limit,
  responsive,
}) {
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [lastWindowSize, setLastWindowSize] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);
  const pageBtnContainer = useRef();
  const flexContainer = useRef();
  const [newLimit, setNewLimit] = useState(limit);

  useEffect(() => {
    if (!data) return;
    setLastWindowSize(window.innerHeight);
    setWindowHeight(window.innerHeight);
    createPages(data, newLimit);
  }, [data]);

  useEffect(() => {
    if (!pages) return;
    if (currentPage > pages.length - 1) {
      setCurrentPage(pages.length - 1);
    }
  }, [pages]);

  useEffect(() => {
    if (!responsive) return;

    window.addEventListener("resize", () => {
      setWindowHeight(window.innerHeight);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setWindowHeight(window.innerHeight);
      });
    };
  }, [responsive]);

  useEffect(() => {
    if (!windowHeight || !responsive) return;
    handleWindowResize();
  }, [windowHeight]);

  function handleWindowResize() {
    const flexBottom = flexContainer?.current?.getBoundingClientRect().bottom;
    const pageBtnContainerTop =
      pageBtnContainer?.current?.getBoundingClientRect().top;
    const gap = pageBtnContainerTop - flexBottom;
    let direction = windowHeight < lastWindowSize ? "down" : "up";

    if (newLimit > 3 && gap < 30 && direction === "down") {
      setNewLimit(newLimit - 3);
      createPages(data, newLimit - 3);
      setLastWindowSize(window.innerHeight);
    } else if (newLimit < 12 && gap > 40 && direction === "up") {
      setNewLimit(newLimit + 3);
      createPages(data, newLimit + 3);
      setLastWindowSize(window.innerHeight);
    }
  }

  function createPages(data, limit) {
    const res = [];
    let page = [];

    if (!limit) {
      setPages([data]);
      return;
    }

    for (let i = 0; i < data.length; i++) {
      if (i % limit === 0 && i > 0) {
        res.push(page);
        page = [];
      } else if (i === data.length - 1) {
        page.push(data[i]);
        res.push(page);
        break;
      }
      page.push(data[i]);
    }

    setPages(res);
    return;
  }

  function handlePageChange(e) {
    setCurrentPage(Number(e.target.id));
  }

  return (
    <div className={styles.border} style={{ width: width, height: height }}>
      <div className={styles.content} style={contentStyle}>
        {pages ? (
          <>
            {title ? <h2 className={styles.title}>{title}</h2> : <></>}
            <div className={styles.flex} style={flexStyle} ref={flexContainer}>
              {currentPage <= pages.length - 1 ? (
                pages[currentPage].map((el, index) => {
                  {
                    return (
                      <Child
                        key={`page_data_${index}`}
                        data={pages[currentPage][index]}
                        Data={pages[currentPage][index]}
                      />
                    );
                  }
                })
              ) : (
                <> </>
              )}
            </div>
            {limit ? (
              <div className={styles.pageBtnContainer} ref={pageBtnContainer}>
                {pages.map((page, index) => {
                  return (
                    <div
                      className={clsx(styles.pageBtn, {
                        [styles.current]: currentPage === index,
                      })}
                      id={index}
                      tabIndex={0}
                      onClick={handlePageChange}
                      key={`page_number_${index}`}></div>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
