import "./Video.scss"

 function Video({ selectedVideo }) {
    //Video component for main video section on home page

    return (
        <div className="video-player">
            <video 
                controls 
                className="video-player__video"
                poster={selectedVideo}
            >
            </video>
        </div>
    )
 }

 export default Video;