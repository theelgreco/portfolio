"use client";
import styles from "./Widget.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Widget({ width, height, title, data, Child, limit }) {
  const [pages, setPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (data) {
      setPages(createPages(data, limit));
    }
  }, [data]);

  function createPages(data, limit) {
    const res = [];
    let page = [];

    for (let i = 0; i < data.length; i++) {
      if (i % limit === 0 && i > 0) {
        res.push(page);
        page = [];
      } else if (i === data.length - 1) {
        res.push(page);
        break;
      }
      page.push(data[i]);
    }

    return res;
  }

  function handlePrevPage() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNextPage() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <div className={styles.border} style={{ width: width, height: height }}>
      <div className={styles.content}>
        {pages ? (
          <>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.flex}>
              {pages[currentPage].map((el, index) => {
                {
                  return (
                    <Child
                      el={el}
                      key={index}
                      data={pages[currentPage][index]}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.buttonContainer}>
              <button
                onClick={handlePrevPage}
                className={clsx(styles.arrow, {
                  [styles.unavailable]: currentPage === 0,
                })}></button>
              <button
                onClick={handleNextPage}
                className={clsx(styles.arrow, {
                  [styles.unavailable]: currentPage === pages.length - 1,
                })}></button>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
