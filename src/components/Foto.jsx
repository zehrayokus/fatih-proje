// Foto.jsx
import React from "react";

const fotoData = [
  { src: "fatihkabe.jpeg" },
  { src: "fatihtoplu.jpeg" },
  { src: "fatih1.jpeg" },
  { src: "fatih.jpeg" },
  { src: "fatihhac.jpeg" },
  { src: "fatih2.jpeg" },
];

function Foto() {
  return (
    <div id="hizmetler" style={{ ...styles.container, scrollMarginTop: "100px" }}>
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {fotoData.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
            <div key={index} style={styles.box}>
              <img src={item.src} alt="" style={styles.image} />
              {/* title kaldırıldı */}
              <p style={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  row: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    width: "100%",
    maxWidth: "450px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "12px",
    padding: "2px",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0b3d51",
    marginBottom: "1px",
  },
  description: {
    fontSize: "20px",
    color: "#333",
    lineHeight: "1.4",
  },
};

export default Foto;
