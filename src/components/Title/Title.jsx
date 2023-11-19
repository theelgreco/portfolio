"use client";
// import styles from "./Title.module.css";

export default function Title({ text, breakpoint }) {
  return (
    <>
      <style jsx>{`
        .title {
          display: flex;
          flex-flow: row wrap;
          justify-content: center;
          gap: 1rem;
          padding: 1rem 2rem;
        }

        .title h1 {
          font-size: 4rem;
          height: fit-content;
        }

        .title h2 {
          font-size: 6rem;
          font-style: italic;
          margin-block-start: auto;
          height: fit-content;
        }

        @media screen and (width < ${breakpoint}px) {
          .title {
            gap: 0rem;
          }

          .title h1,
          .title h2 {
            flex-basis: 100%;
          }

          .title h1 {
            text-align: left;
          }

          .title h2 {
            text-align: right;
            margin-top: -1.25rem;
          }
        }
      `}</style>
      <div className="title">
        <h1>Welcome to</h1>
        <h2>{text}</h2>
      </div>
    </>
  );
}
