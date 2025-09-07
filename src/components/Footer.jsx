// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={leftStyle}>
          <p style={textStyle}>📞 İletişim: <a href="tel:+905377917495" style={linkStyle}>05377917495</a></p>
          <p style={textStyle}>✉️ Gmail: <a href="mailto:fatihyokus49@gmail.com" style={linkStyle}>fatihyokus49@gmail.com</a></p>
        </div>

        {/* Ortadaki dikey çizgi */}
        <div style={dividerStyle}></div>

        <div style={rightStyle}>
          <p style={textStyle}>▶ Youtube: <a href="https://www.youtube.com/@fatihyokusAMEDI" target="_blank" rel="noreferrer" style={linkStyle}>@fatihyokusAMEDI</a></p>
          <p style={textStyle}>🅾 Instagram: <a href="https://www.instagram.com/yokus_faih1961" target="_blank" rel="noreferrer" style={linkStyle}>yokus_faih1961</a></p>
        </div>
      </div>
      
    </footer>
  );
}

const footerStyle = {
  background: "#d8dddda8",
  color: "black",
  padding: "30px 0",
  width: "100%",
  position: "relative",
  bottom: 0,
};

const containerStyle = {
  maxWidth: "900px",         // sayfadan taşmasın diye
  margin: "0 auto",          // ortalamak için
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "100px",               // sol ve sağ grup arası boşluk
};

const leftStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
};

const rightStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const dividerStyle = {
  width: "1px",
  backgroundColor: "#888",
  margin: "0 20px",
};

const textStyle = {
  margin: "10px 0",
  fontSize: "18px",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

export default Footer;
