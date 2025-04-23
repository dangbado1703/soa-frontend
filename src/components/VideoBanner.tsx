"use client";

import { Suspense } from "react";

const VideoBanner = () => {
  return (
    <Suspense fallback={<p>Loading video...</p>}>
      <div className="w-full">
        <video
          width="100%"
          height="100%"
          autoPlay
          muted
          className="object-cover h-full"
        >
          <source src="/banner-video.mov" type="video/mp4" />
        </video>
      </div>
    </Suspense>
  );
};

export default VideoBanner;
