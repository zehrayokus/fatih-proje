// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Boxes from "./components/Boxes";
import Foto from "./components/Foto";

function App() {
  // En son video
  const lastVideo = {
    id: 1,
    title: "👉 YouTube Kanalım",
    description: "Kanalıma hoş geldiniz!",
    src: "https://www.youtube.com/embed/IpaZxowl_8Q", // embed link
    channelUrl: "https://www.youtube.com/@fatihyokusAMEDI/videos"
  };

  return (
    <div style={appStyle}>
      {/* Navbar */}
      <Navbar />

      {/* İçerik */}
      {/* İçerik */}
<div style={{ ...contentStyle, paddingTop: "120px" }} id="hakkimda">
  <div style={videoWrapper}>
    {/* Sol: Video kısmı */}
    <div style={videoBox}>
      <a
        href={lastVideo.channelUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={channelLink}
      >
        {lastVideo.title}
      </a>

      <iframe
        width="590"
        height="320"
        src={lastVideo.src}
        title={lastVideo.description}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={videoStyle}
      ></iframe>
    </div>

    {/* Sağ: Yazı kısmı */}
    <div style={textBox}>
      <h2>Hakkımda</h2>
      <p>
        Merhaba! Benim kişisel YouTube kanalıma hoş geldiniz. 
        Kanalımda Türkçe ve Kürtçe olarak dini sohbetler, vaazlar, Şafii ve Hanefi fıkhı ile ilgili anlatımlar, menkıbeler, siyer ve vaazlar paylaşılmaktadır. 🙌
      </p>
    </div>
  </div>
</div>

<Boxes />
<Foto/>
<FAQ />
<ContactForm />
      <Footer />
    </div>
  );
}

// Stiller
const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

const contentStyle = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-start",
  padding: "150px",
};

const videoWrapper = {
  display: "flex",
  flexDirection: "row", // yan yana
  alignItems: "flex-start",
  gap: "120px", // video ile yazı arası boşluk
};

const videoBox = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
};

const channelLink = {
  marginBottom: "10px",
  fontSize: "28px",
  fontWeight: "bold",
  color: "#0b3d51ff",
  textDecoration: "none",
};

const videoStyle = {
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
};

const textBox = {
  maxWidth: "400px",
  fontSize: "21px",
  lineHeight: "1.4",
  color: "#333",
};

export default App;
