import React from "react";
import axios from "axios";
import Video from "../../components/Video/Video";
import Details from "../../components/Details/Details";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Recommendations from "../../components/Recommendations/Recommendations";
import Comments from "../../components/Comments/Comments";
import "./Home.scss";

const videoEndpoint = `${process.env.REACT_APP_API_ENDPOINT}videos`;

class Home extends React.Component {
  state = {
    selectedVideo: null,
    videoList: [],
    hasFetchingError: false,
  };

  componentDidMount() {
    document.title = "BrainFlix";
    axios
      .get(videoEndpoint)
      .then((response) => {
        const activeVideoId = this.props.match.params.id || response.data[0].id;
        this.fetchActiveVideo(activeVideoId).then((activeVideoResponse) => {
          this.setState({
            videoList: response.data,
            selectedVideo: activeVideoResponse.data,
          });
        });
      })
      .catch((error) => {
        this.setState({
          hasFetchingError: true,
        });
      });
  }

  componentDidUpdate(previousProps) {
    window.scrollTo(0, 0);
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;

    // Only update the active video if we are on a new url!
    if (previousId !== currentId) {
      if (typeof currentId === "undefined") {
        const defaultVideoId = this.state.videoList[0].id;
        return this.fetchActiveVideo(defaultVideoId)
          .then((response) => {
            this.setState({
              selectedVideo: response.data,
            });
          })
          .catch((error) => {
            this.setState({
              hasFetchingError: true,
            });
          });
      }
      this.fetchActiveVideo(currentId).then((response) => {
        this.setState({
          selectedVideo: response.data,
        }).catch((error) => {
          this.setState({
            hasFetchingError: true,
          });
        });
      });
    }
  }

  fetchActiveVideo = (videoId) => {
    return axios.get(`${videoEndpoint}/${videoId}`);
  };

  millisecondsToDate = (milliseconds) => {
    let date = new Date(milliseconds);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  handleClick = (event) => {
    event.preventDefault();
    return this.props.handleUpload();
  };

  render() {
    const { selectedVideo, videoList } = this.state;

    if (this.state.hasFetchingError) {
      return <p>Error loading data from server</p>;
    }

    const filteredVideos = videoList.filter((video) => {
      return video.id !== selectedVideo.id;
    });

    return videoList && selectedVideo ? (
      <>
        {this.props.uploadSuccessful ? (
          <div className="upload-successful">
            <h2 className="upload-successful__text">
              Video Upload Successful!
            </h2>
            <button
              onClick={this.handleClick}
              className="upload-successful__button"
            >
              &times;
            </button>
          </div>
        ) : null}
        <Video selectedVideo={selectedVideo.image} />
        <main className="main">
          <div className="video-details">
            <Details
              selectedVideo={selectedVideo}
              date={this.millisecondsToDate}
            />
            <CommentsForm comments={selectedVideo.comments} />
            <Comments
              comments={selectedVideo.comments}
              date={this.millisecondsToDate}
            />
          </div>
          <Recommendations videos={filteredVideos} />
        </main>
      </>
    ) : (
      <h1>Loading...</h1>
    );
  }
}

export default Home;
