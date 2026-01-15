// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/FAQ";
import Boxes from "./components/Boxes";
import Foto from "./components/Foto";
import Video from "./components/Video";

function App() {
  const lastVideo = {
    id: 1,
    title: "👉 YouTube Kanalım",
    description: "Kanalıma hoş geldiniz!",
    src: "https://www.youtube.com/embed/IpaZxowl_8Q",
    channelUrl: "https://www.youtube.com/@fatihyokusAMEDI/videos",
  };

  return (
    <div style={appStyle}>
      <Navbar />

      {/* VIDEO ARTIK GERÇEK COMPONENT */}
      <Video video={lastVideo} />

      <Boxes />
      <Foto />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

/* SADECE GENEL APP STİLİ KALDI */
const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

export default App;
