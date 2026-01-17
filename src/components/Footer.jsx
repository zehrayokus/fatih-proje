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
  padding: "10px 0",
  width: "100%",
};

const containerStyle = {
  width: "100%",
  maxWidth: "100%",
  margin: "0 auto",
  padding: "0 16px", // 🔑 kenarlardan az boşluk
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "1px",
  flexWrap: "wrap", // 🔑 MOBİLDE ALT ALTA
  boxSizing: "border-box",
};

const leftStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // 🔑 mobil uyum
};

const rightStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center", // 🔑 mobil uyum
};

const dividerStyle = {
  width: "1px",
  height: "80px",
  backgroundColor: "#888",
};

/* MOBİLDE DİKEY ÇİZGİYİ GİZLE */
const isMobile = window.innerWidth < 768;
if (isMobile) {
  dividerStyle.display = "none";
}

const textStyle = {
  margin: "6px 0",
  fontSize: "14px",
  textAlign: "center",
};

const linkStyle = {
  color: "black",
  textDecoration: "none",
};

export default Footer;
