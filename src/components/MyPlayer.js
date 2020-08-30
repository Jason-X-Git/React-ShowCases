import React, { useState } from "react";
import ReactPlayer from "react-player";
import Select from "react-select";

const options = [
  {
    value: "videos/Transformer.m4v",
    label: "Transformer",
    des: "Edward's Magic Transformer",
    scratchURL: "https://scratch.mit.edu/projects/415643132/editor/",
  },
  {
    value: "videos/Flower.mkv",
    label: "Flower",
    des: "Edward's Scratch Flower",
    scratchURL: "https://scratch.mit.edu/projects/418865088/editor/",
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
              height: 'auto',
              width: 'auto'
            }}
          >
            <ReactPlayer
              style={{
                position: "relative",
              }}
              url={videoURL.value}
              //  url="videos/Transformer.mkv"
              controls={true}
              width={'100%'}
              height={'100%'}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyPlayer;
