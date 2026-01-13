// Boxes.jsx
import React from "react";

function Boxes() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img src="kabe.png" alt="Hac Rehberi" style={styles.image} />
        <h3 style={styles.title}>ac Bilgileri</h3>
        <p style={styles.text}>
          Hac ibadeti hakkında detaylı bilgilere ulaşabilirsiniz.
        </p>
      </div>

      <div style={styles.box}>
        <img src="kuran.png" alt="Umre Bilgileri" style={styles.image} />
        <h3 style={styles.title}>Umre Rehberi</h3>
        <p style={styles.text}>
          Umre yolculuğu için gerekli tüm bilgileri keşfedin.
        </p>
      </div>

      <div style={styles.box}>
        <img src="ihram.png" alt="Hac Takvimi" style={styles.image} />
        <h3 style={styles.title}>Manevi Hazırlık</h3>
        <p style={styles.text}>
          Hac ve umre için önemli tarihleri buradan öğrenin.
        </p>
      </div>

      <div style={styles.box}>
        <img src="kuranokuyan.png" alt="Faydalı Bilgiler" style={styles.image} />
        <h3 style={styles.title}>Faydalı Bilgiler</h3>
        <p style={styles.text}>
          Seyahatinizde işinize yarayacak pratik bilgilere göz atın.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // yatayda ortala
    gap: "30px",
    marginTop: "-30px",
    marginBottom: "100px",
    width: "100%", // container tüm genişlikte
    maxWidth: "1500px", // maksimum genişlik
  },
  box: {
    width: "280px", // sabit genişlik
    height: "280px",
    backgroundColor: "#f9f9f9",
    border: "1px solid #ddd",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "0.3s",
    cursor: "pointer",
  },
  image: {
    width: "80px",
    height: "80px",
    objectFit: "contain",
    marginBottom: "10px",
  },
  title: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#0b3d51",
    marginBottom: "5px",
  },
  text: {
    fontSize: "15px",
    color: "#333",
    lineHeight: "1.4",
  },
};

export default Boxes;
