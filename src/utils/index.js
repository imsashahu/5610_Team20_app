import axios from "axios";

export const isEmpty = (o) => Object.entries(o).length === 0;

export const getYoutubeVideos = async (debug, searchTerm) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}&key=${apiKey}`;
  debug && console.log("[getYoutubeVideos] searchTerm", searchTerm);
  return axios
    .get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      debug && console.log("[getYoutubeVideos]", response.data.items);
      return response;
    });
};

export const searchYoutubeVideosBySearchTerm = async (searchTerm) => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${searchTerm}&key=${apiKey}`;
  console.log("[getYoutubeVideos] searchTerm", searchTerm);
  return axios
    .get(apiUrl, {
      headers: {
        Accept: "application/json",
      },
    })
    .then((response) => {
      console.log("[getYoutubeVideos]", response.data.items);
      return response;
    })
    .catch((error) => {
      console.error(error);
    });
};
