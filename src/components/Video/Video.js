import "./Video.scss"

 function Video({ selectedVideo }) {
    return (
        <div className="video-player">
            <video 
                controls 
                className="video-player__video"
                src={selectedVideo}
            >
            </video>
        </div>
    )
 }

 export default Video;