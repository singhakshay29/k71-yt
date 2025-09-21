import video from "../../assets/69496b2d.mp4";
const Video = () => {
  return (
    <div>
      <video autoPlay loop muted playsInline src={video} />
    </div>
  );
};

export default Video;
