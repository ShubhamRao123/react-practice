// Home.js
import React, { useState } from "react";
import Image from "./Image";
import PlayButton from "./PlayButton/PlayButton";
import videos from "../Data/data";
import AddVideo from "./AddVideo/AddVideo";
import EditVideoForm from "../component/EditVideoForm"; // Import the edit form

function Home() {
  const [videoList, setVideoList] = useState(videos);
  const [editingVideo, setEditingVideo] = useState(null); // Track the video being edited

  const addVideo = (newVideo) => {
    setVideoList([...videoList, { ...newVideo, id: videoList.length + 1 }]);
  };

  const updateVideo = (updatedVideo) => {
    setVideoList(
      videoList.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
    setEditingVideo(null); // Close edit form after updating
  };

  return (
    <div className="home">
      <div>
        <AddVideo addVideo={addVideo} />
      </div>

      {videoList.map((video) => (
        <div key={video.id}>
          <Image
            title={video.title}
            channel={video.channel}
            views={video.views}
            time={video.time}
            verified={video.verified}
            id={video.id}
          >
            <div style={{ clear: "both" }}>
              <PlayButton
                message="play"
                onPlay={() => console.log(" playing ", video.title)}
                onPause={() => console.log("paused", video.title)}
              >
                {video.title}
              </PlayButton>
            </div>
          </Image>
          <button onClick={() => setEditingVideo(video)}>Edit</button>
        </div>
      ))}

      {/* Show Edit Form if editing a video */}
      {editingVideo && (
        <EditVideoForm
          video={editingVideo}
          updateVideo={updateVideo}
          setEditingVideo={setEditingVideo}
        />
      )}
    </div>
  );
}

export default Home;
