import styles from "./TechIcon.module.css";

export default function TechIcon({ data }) {
  return (
    <div
      style={{
        width: "30%",
        aspectRatio: "1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
        flexFlow: "column nowrap",
        boxShadow: "0px 0px 10px 0px rgb(0 0 0 /25%)",
        borderRadius: "15px",
      }}>
      <img src={`/tech_icons/${data}.png`} style={{ height: "50%" }} />
      <p style={{ fontSize: "10px" }}>{data}</p>
    </div>
  );
}
