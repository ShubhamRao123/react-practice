import { useState } from "react";
import "./AddVideo.css";

function AddVideo({ addVideo }) {
  const [video, setVideo] = useState({
    title: "",
    channel: "Shobhit dost",
    views: "",
    time: "8 month ago",
    verified: false,
  });

  function handleSubmit(e) {
    e.preventDefault();
    addVideo(video); // Call the addVideo function passed from App
    setVideo({
      title: "",
      views: "",
      channel: "Shobhit dost",
      time: "8 month ago",
      verified: false,
    }); // Reset form
  }

  function handleChange(e) {
    setVideo({
      ...video,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={video.title}
        />
        <input
          type="text"
          onChange={handleChange}
          name="views"
          placeholder="Views"
          value={video.views}
        />
        <button type="submit">Add Video</button>
      </form>
    </div>
  );
}

export default AddVideo;
