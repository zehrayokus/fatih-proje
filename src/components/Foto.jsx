// Foto.jsx
import React from "react";

const fotoData = [
  { src: "fatihkabe.jpeg", title: "Kabe", description: "Kabe-i Muazzama'nın detaylı görüntüsü." },
  { src: "fatihtoplu.jpeg", title: "Mina", description: "Hac yolculuğu sırasında Mina bölgesi." },
  { src: "fatih1.jpeg", title: "Arafat", description: "Arafat'ta vakfe yapan hacılar." },
  { src: "fatih.jpeg", title: "Müzdelife", description: "Güneş batımında Müzdelife." },
  { src: "fatihhac.jpeg", title: "Tavaf", description: "Kabe etrafında tavaf yapanlar." },
  { src: "fatih2.jpeg", title: "Sa’y", description: "Safa ve Merve arasında sa’y ibadeti." },
];

function Foto() {
  return (
    <div id="hizmetler" style={{ ...styles.container, scrollMarginTop: "100px" }}>
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div key={rowIndex} style={styles.row}>
          {fotoData.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
            <div key={index} style={styles.box}>
              <img src={item.src} alt={item.title} style={styles.image} />
              <h3 style={styles.title}>{item.title}</h3>
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
    gap: "30px",
    marginBottom: "50px",
  },
  row: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    width: "100%",
  },
  box: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    borderRadius: "12px",
    padding: "25px",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#0b3d51",
    marginBottom: "6px",
  },
  description: {
    fontSize: "20px",
    color: "#333",
    lineHeight: "1.4",
  },
};

export default Foto;
