import React, { useState } from "react";
import ReactPlayer from "react-player";
import Select from "react-select";

const options = [
  {
    value: "videos/Transformer.mkv",
    label: "Transformer",
    des: "Edward's Magic Transformer",
    scratchURL: "https://scratch.mit.edu/projects/415643132/editor/",
  },
  {
    value: "videos/UAVDashboard.MP4",
    label: "UAV Dashboard",
    des: "Jason's UAV DashBoard",
  },
];
const MyPlayer = () => {
  const [videoURL, setVideoURL] = useState(options[0]);

  return (
    <div
      style={{
        width: "60%",
        padding: "5px auto",
        margin: "5px auto",
      }}
    >
      <Select
        value={videoURL}
        onChange={(selectedOption) => {
          setVideoURL(selectedOption);
          console.log("select video: ", videoURL);
        }}
        options={options}
        isClearable={true}
        isSearchable={true}
      />
      {videoURL && (
        <div>
          <div
            style={{
              margin: "30px auto 5px auto",
              textAlign: "center",
              // justifyContent: "center",
              // alignItems: "center",
              fontSize: "30px",
              color: "blue",
            }}
          >
            {videoURL.des}
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "red",
              margin: "15px auto",
            }}
          >
            {videoURL.scratchURL && (
              <a href={videoURL.scratchURL} target="_blank">
                Scratch Link
              </a>
            )}
          </div>
          <div
            style={{
              position: "relative",
            }}
          >
            <ReactPlayer
              style={{
                position: "relative",
                left: 0,
                top: 0,
              }}
              url={videoURL.value}
              //  url="videos/Transformer.mkv"
              controls={true}
              width={1080}
              height={720}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlayer;