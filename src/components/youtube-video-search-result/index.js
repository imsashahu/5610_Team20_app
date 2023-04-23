import React from "react";
import { useQuery } from "react-query";
import { searchYoutubeVideosBySearchTerm } from "../../utils";

const YoutubeVideoSearchResult = ({ searchTerm }) => {
  const { isLoading, error, data } = useQuery("profile", async () => {
    const res = searchYoutubeVideosBySearchTerm(searchTerm);
    console.log("[YoutubeVideoSearchResult] searchTerm", searchTerm);
    console.log("[YoutubeVideoSearchResult] res", res);
    return res;
  });

  console.log("error", error);

  return (
    <>
      {isLoading && (
        <table className="table table-hover">
          <thead>
            <tr key="youbute-videos-table-head">
              <th scope="col">Author</th>
              <th scope="col">Videos for Beginners</th>
            </tr>
          </thead>
          <tbody>
            <tr
              key={1}
              style={{
                cursor: "pointer",
              }}
            >
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center align-items-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {!isLoading && !error && !data && (
        <>
          <div>No Data</div>
        </>
      )}

      {!isLoading && !error && data && (
        <table className="table table-hover">
          <thead>
            <tr key="youbute-videos-table-head">
              <th scope="col">Author</th>
              <th scope="col">Videos for Beginners</th>
            </tr>
          </thead>
          <tbody>
            {data.data.items.map((video, index) => (
              <tr
                key={index}
                style={{
                  cursor: "pointer",
                }}
              >
                <td>
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
                    {video.snippet.title
                      .replaceAll("&quot;", '"')
                      .replaceAll("&apos;", "'")}
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

export default YoutubeVideoSearchResult;
