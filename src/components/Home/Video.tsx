import video from "../../assets/69496b2d.mp4";

const Video = ({className}:{ className?: string }) => {
  return (
    <div>
      <video autoPlay loop muted playsInline src={video} className={className} />
    </div>
  );
};

export default Video;
