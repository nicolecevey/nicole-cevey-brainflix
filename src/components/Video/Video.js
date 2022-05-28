import "./Video.scss"

 function Video({ selectedVideo }) {
    return (
        <div className="video-player">
            <video 
                controls 
                className="video-player__video"
                poster={ selectedVideo.image }
            >
            </video>
        </div>
    )
 }

 export default Video;