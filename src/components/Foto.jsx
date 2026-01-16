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
    <div
      id="hizmetler"
      style={{
        ...styles.outerWrapper,
        backgroundImage: "url(/sarka.png)", // 🔴 TEK ARKA PLAN FOTOĞRAFI
        scrollMarginTop: "100px",
      }}
    >
      <div style={styles.fadeOverlay} />
      <div style={styles.container}>
        {Array.from({ length: 3 }).map((_, rowIndex) => (
          <div key={rowIndex} style={styles.row}>
            {fotoData.slice(rowIndex * 2, rowIndex * 2 + 2).map((item, index) => (
              <div key={index} style={styles.box}>
                <img src={item.src} alt="" style={styles.image} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  /* 🔴 TÜM FOTOĞRAFLARIN ARKASINDAKİ TEK ARKA PLAN */
  outerWrapper: {
    position: "relative",
    padding: "60px 20px",        // ⬅️ artır = arka plan daha çok görünür
    backgroundSize: "cover",     // ⬅️ cover / contain dene
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    
    /* ⬇️ ARKA PLANIN BELİRGİNLİĞİ */
    filter: "brightness(1)",   // ⬅️ 0.7 = koyu / 1 = normal
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },

  row: {
    display: "flex",
    gap: "18px",                 // ⬅️ kutular arası boşluk
    justifyContent: "center",
    width: "100%",
  },

  box: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "14px",
    overflow: "hidden",
    backgroundColor: "#fff",

    /* ⬇️ arka plan ile fotoğraf ayrımı */
    boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "14px",
  },
  outerWrapper: {
  position: "relative",
  padding: "60px 20px",
  backgroundImage: "url(/arka.png)", // Arka plan fotoğrafı
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  /* 🔴 KENARLAR SAYDAM, İÇE DOĞRU OPAK */
  /* Arka planın üst ve alt kenarları saydam, ortası opak */
WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
WebkitMaskRepeat: "no-repeat",
WebkitMaskPosition: "center",
WebkitMaskSize: "cover",
maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
maskRepeat: "no-repeat",
maskPosition: "center",
maskSize: "cover",

},

};

export default Foto;
