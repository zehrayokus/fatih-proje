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
    flexWrap: "wrap",              // 🔴 ALT SATIRA GEÇ
    justifyContent: "space-between",
    gap: "10px",
    width: "100%",
    maxWidth: "900px",
    margin: "0 auto 100px auto",
    boxSizing: "border-box",
  },

  box: {
    width: "48%",                  // 🔴 2 KUTU YAN YANA
    backgroundColor: "#f9f9f9",
    border: "1px solid #e0e0e0",
    borderRadius: "14px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 6px 14px rgba(0,0,0,0.08)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
  },

  image: {
    width: "70px",
    height: "70px",
    objectFit: "contain",
    marginBottom: "1px",
  },

  title: {
    fontSize: "17px",
    fontWeight: "600",
    color: "#0b3d51",
    marginBottom: "1px",
    wordBreak: "break-word",
  },

  text: {
    fontSize: "14px",
    color: "#444",
    lineHeight: "1.2",
    wordBreak: "break-word",       // 🔴 TAŞMA YOK
    overflowWrap: "break-word",
  },
};

export default Boxes;
