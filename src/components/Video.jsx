import React from "react";
import "./Video.css";

function Video({ video }) {
  return (
  <div
    id="hakkimda"
    className="video-container"
  >
    {/* BAŞLIK */}
    <h2 className="video-title">
      <a
        href={video.channelUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {video.title}
      </a>
    </h2>

    {/* VİDEO */}
    <div className="video-wrapper">
      <iframe
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    {/* YAZI – VİDEONUN ALTINDA */}
    <p className="video-about">
      Merhaba! Benim kişisel YouTube kanalıma hoş geldiniz.
      Kanalımda Türkçe ve Kürtçe olarak dini sohbetler, vaazlar,
      Şafii ve Hanefi fıkhı ile ilgili anlatımlar, menkıbeler,
      siyer ve vaazlar paylaşılmaktadır. 🙌
    </p>
  </div>
);

}

export default Video;
