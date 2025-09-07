import React from "react";

function Video({ video }) {
  return (
   <div id="hakkimda" style={{ ...videoContainer, scrollMarginTop: "120px" }}>

      <h2 style={{ marginBottom: "10px" }}>
        <a
          href={video.channelUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "#ff0000" }}
        >
          {video.title}
        </a>
      </h2>
      <iframe
        width="560"
        height="315"
        src={video.src}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ borderRadius: "8px" }}
      ></iframe>
      <p style={{ marginTop: "10px", maxWidth: "560px" }}>{video.description}</p>

    </div>
  );
}

const videoContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start", // sola hizala
};

export default Video;
