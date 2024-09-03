"use client";
import React, { useState } from "react";
import getVideo from "./Api";
import Input from "./elements/Input";

const Download = () => {
  const [url, setUrl] = useState("");

  const handleDownload = async () => {
    try {
      const res = await getVideo(url);
      const videoUrl = res.data.play;

      const response = await fetch(videoUrl);
      const blob = await response.blob();

      const link = document.createElement("a");
      const blobUrl = URL.createObjectURL(blob);
      link.href = blobUrl;
      link.setAttribute("download", "video.mp4");
      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Error downloading video:", error);
    }
  };

  return (
    <div className="flex gap-4 h-[44px] items-center justify-center">
      <Input
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter TikTok URL"
        height={"54px"}
        inputWrapperStyle={{ width: "400px" }}
      />
      <button
        className="bg-red-500 px-5 py-2 rounded-sm text-white hover:bg-red-600 hover:translate-y-[-2px]"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

export default Download;
