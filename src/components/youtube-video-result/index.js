import React from "react";
import { Link } from "react-router-dom";
import { isEmpty } from "../../utils";

const YoutubeVideoResult = ({ youtubeVideos }) => {
  return (
    <>
      {!isEmpty(youtubeVideos) && (
        <table className="table table-hover">
          <thead>
            <tr key="youbute-videos-table-head">
              <th scope="col">Author</th>
              <th scope="col">Videos for Beginners</th>
            </tr>
          </thead>
          <tbody>
            {youtubeVideos.data.items.map((video, index) => (
              <tr key={index}>
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
