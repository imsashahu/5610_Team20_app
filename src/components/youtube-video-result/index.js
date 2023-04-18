import React from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "../../utils";

const YoutubeVideoResult = ({ youtubeVideos }) => {
  return (
    <>
      {!isEmpty(youtubeVideos) && (
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Youtube Channel</th>
              <th scope="col">Youtube Video</th>
            </tr>
          </thead>
          <tbody>
            {youtubeVideos.data.items.map((video) => (
              <tr key={video.id.videoId}>
                <th scope="row">
                  <a
                    href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                  >
                    {video.snippet.channelTitle}
                  </a>
                </th>
                <td>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  >
                    {video.snippet.title}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default YoutubeVideoResult;
