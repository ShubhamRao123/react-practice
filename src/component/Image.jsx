import "./Image.css";

function Image({ title, channel, id, views, time, verified, children }) {
  return (
    <div className="container">
      <div className="pic">
        <img
          src={`https://picsum.photos/id/${id}/160/90`}
          alt="Manju Chutiya"
        />
      </div>
      <div className="title">
        <h4>{title} tutorial</h4>
      </div>

      <div className="channel">
        <h3>
          {channel} {verified && "✅ "}
        </h3>
      </div>

      <div className="view">
        <span>{views} views</span>
        <span>.</span>
        {time}
      </div>
      {children}
    </div>
  );
}

export default Image;
