import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isEmpty } from "../../utils";

const YoutubeVideoResult = ({ youtubeVideos }) => {
  const navigate = useNavigate();
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
              <tr
                key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <td scope="row">
                  <a
                    className="text-dark"
                    href={`https://www.youtube.com/channel/${video.snippet.channelId}`}
                  >
                    {video.snippet.channelTitle}
                  </a>
                </td>
                <td>
                  <a
                    className="text-dark"
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
