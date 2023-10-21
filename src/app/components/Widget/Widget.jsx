import styles from "./Widget.module.css";

export default function Widget({ width, height, data, Child }) {
  return (
    <div className={styles.border} style={{ width: width, height: height }}>
      <div className={styles.content}>
        {data ? (
          data.map((el, index) => {
            return <Child el={el} key={index} />;
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
