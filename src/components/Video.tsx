import React from "react";

const Video: React.FC = () => {
  return (
    <div className="relative w-full items-stretch min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/assets/video.MP4" //  <a href="https://www.vecteezy.com/free-videos/nature">Nature Stock Videos by Vecteezy</a>
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Video;
