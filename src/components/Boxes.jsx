// Boxes.jsx
import React from "react";

function Boxes() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <img src="kabe.png" alt="Hac Rehberi" style={styles.image} />
        <h3 style={styles.title}>Kâbe’ye Yöneliş</h3>
        <p style={styles.text}>
         “Allah’a iman edin ve Resûlü’ne itaat edin ki size rahmet edilsin.”
(Âl-i İmrân Suresi, 132)
        </p>
      </div>

      <div style={styles.box}>
        <img src="ihram.png" alt="Umre Bilgileri" style={styles.image} />
        <h3 style={styles.title}>İman ile Yakınlaşma</h3>
        <p style={styles.text}>
          “Ey insanlar! Sizi ve sizden öncekileri yaratan Rabbinize ibadet edin ki takvaya eresiniz.”
(Bakara Suresi, 21)
        </p>
      </div>

      <div style={styles.box}>
        <img src="kuran.png" alt="Hac Takvimi" style={styles.image} />
        <h3 style={styles.title}>Allah’a Yakınlık</h3>
        <p style={styles.text}>
          “Allah’a yönelen kimse için O, mutlaka bir çıkış yolu ihsan eder.”
(Talâk Suresi, 2)
        </p>
      </div>

      <div style={styles.box}>
        <img src="kuranokuyan.png" style={styles.image} />
        <h3 style={styles.title}>Tövbe ile Yenilenme</h3>
        <p style={styles.text}>
         “Kalpler ancak Allah’ı anmakla huzur bulur.”
(Ra‘d Suresi, 28)
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", // yatayda ortala
    gap: "15px",
    marginTop: "-30px",
    marginBottom: "100px",
    width: "100%", // container tüm genişlikte
    maxWidth: "100%", // maksimum genişlik
  },
  box: {
    width: "100%", // sabit genişlik
    height: "100%",
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
    lineHeight: "1.3",
  },
};

export default Boxes;
