"use client";
import styles from "./Widget.module.css";
import { useState, useEffect } from "react";
import clsx from "clsx";

export default function Widget({
  width,
  height,
  title,
  style,
  data,
  Child,
  limit,
}) {
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
        page.push(data[i]);
        res.push(page);
        break;
      }
      page.push(data[i]);
    }

    return res;
  }

  function handlePageChange(e) {
    setCurrentPage(Number(e.target.id));
  }

  return (
    <div className={styles.border} style={{ width: width, height: height }}>
      <div className={styles.content}>
        {pages ? (
          <>
            {title ? <h2 className={styles.title}>{title}</h2> : <></>}
            <div className={styles.flex} style={style}>
              {pages[currentPage].map((el, index) => {
                {
                  return (
                    <Child
                      key={`page_data_${index}`}
                      data={pages[currentPage][index]}
                      Data={pages[currentPage][index]}
                    />
                  );
                }
              })}
            </div>
            <div className={styles.pageBtnContainer}>
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
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
