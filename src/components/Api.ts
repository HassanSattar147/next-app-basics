// // const axios = require("axios");
// import axios from "axios";
// const getVideo = async () => {
//   const options = {
//     method: "GET",
//     url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
//     params: {
//       url: "https://www.tiktok.com/@tiktok/video/7231338487075638570",
//       hd: "1",
//     },
//     headers: {
//       "x-rapidapi-key": "82fed761abmshd343b4975fd94c3p1dbe6cjsnb34c7c5c847c",
//       "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     return response.data;
//   } catch (error) {
//     console.error("error", error);
//   }
// };
// export default getVideo;

import axios from "axios";

const getVideo = async (videoUrl: string) => {
  const options = {
    method: "GET",
    url: "https://tiktok-video-no-watermark2.p.rapidapi.com/",
    params: {
      url: videoUrl,
      hd: "1",
    },
    headers: {
      "x-rapidapi-key": "82fed761abmshd343b4975fd94c3p1dbe6cjsnb34c7c5c847c",
      "x-rapidapi-host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching video:", error);
  }
};

export default getVideo;
