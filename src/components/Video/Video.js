import "./Video.scss"

 function Video({ selectedVideo }) {
    return (
        <div className="video">
            <video 
                controls 
                className="video"
                poster={ selectedVideo.image }
            >
            </video>
        </div>
    )
 }

 export default Video;