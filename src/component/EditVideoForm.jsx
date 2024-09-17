import { useReducer, useEffect } from "react";

// Reducer function to handle form state
function videoReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD": {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    case "SET_VIDEO": {
      return action.video;
    }
    case "RESET_FORM": {
      return action.initialState;
    }
    default:
      return state;
  }
}

function EditVideoForm({ video, updateVideo, setEditingVideo }) {
  const initialState = video;

  // Using useReducer to manage form state
  const [editedVideo, dispatch] = useReducer(videoReducer, initialState);

  // Sync the form state when the video prop changes
  useEffect(() => {
    dispatch({ type: "SET_VIDEO", video });
  }, [video]);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVideo(editedVideo); // Call the update function
  };

  return (
    <div className="edit-video-form">
      <h2>Edit Video</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={editedVideo.title || ""}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          type="text"
          name="views"
          value={editedVideo.views || ""}
          onChange={handleChange}
          placeholder="Views"
        />
        <button type="submit">Update Video</button>
        <button type="button" onClick={() => setEditingVideo(null)}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditVideoForm;
