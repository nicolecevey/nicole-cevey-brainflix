import React from "react";
import axios from "axios";
import Video from "../../components/Video/Video";
import Details from "../../components/Details/Details";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Recommendations from "../../components/Recommendations/Recommendations";
import Comments from "../../components/Comments/Comments";
import "./Home.scss";
import { v4 as uuid } from "uuid";
import ClipLoader from "react-spinners/ClipLoader";

const videoEndpoint = "https://nicole-cevey-brainflix-api.vercel.app/videos";

class Home extends React.Component {
  state = {
    selectedVideo: null,
    videoList: [],
    hasFetchingError: false,
    loading: true,
  };

  componentDidMount() {
    document.title = "BrainFlix";
    // Get videos on component mount
    axios
      .get(videoEndpoint)
      .then((response) => {
        // Get active video id
        // Default is the first video in the data set
        const activeVideoId = this.props.match.params.id || response.data[0].id;
        // Get active video using the active video id
        this.fetchActiveVideo(activeVideoId).then((activeVideoResponse) => {
          // Set both the selected video and video list
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
    // On component update get previous video id and current video id
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;

    // Only update the active video if we are on a new url
    if (previousId !== currentId) {
      if (typeof currentId === "undefined") {
        // Set default video to first video in data set
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
      // Fetch active video
      this.fetchActiveVideo(currentId)
        .then((response) => {
          // Scroll to top of page on update
          window.scrollTo(0, 0);
          // Set selected video to active video
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
  }

  fetchActiveVideo = (videoId) => {
    // Fetch video using endpoint and given video id
    return axios.get(`${videoEndpoint}/${videoId}`);
  };

  millisecondsToDate = (milliseconds) => {
    // Format date for videos and comments
    let date = new Date(milliseconds);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  postComment = (event, videoId) => {
    event.preventDefault();
    // Post new comment
    axios
      .post(`${videoEndpoint}/${videoId}/comments`, {
        name: "Mohan Muruge",
        comment: event.target.comment.value,
        id: uuid(),
        likes: 0,
        timestamp: Date.now(),
      })
      .then((res) => {
        // Create a new video object that includes a new comment
        const video = { ...this.state.selectedVideo };
        // Add new comment to beginning of array of comments
        video.comments.unshift(res.data);
        // Set state for selectedVideo to the new video object
        this.setState({ selectedVideo: video });
      })
      .catch((err) => console.error(err));
    event.target.reset();
  };

  deleteComment = (event, videoId, commentId) => {
    event.preventDefault();
    // Delete comment
    axios
      .delete(`${videoEndpoint}/${videoId}/comments/${commentId}`)
      .then(() => {
        // Create a new video object
        const video = { ...this.state.selectedVideo };
        // Create new array of comments that doesn't include selected comment
        const updatedCommentsArray = video.comments.filter(
          (comment) => comment.id !== commentId
        );
        // Set video comments to be updated array
        video.comments = updatedCommentsArray;
        // Set state of selectedVideo to the updated video
        this.setState({ selectedVideo: video });
      })
      .catch((error) => console.log(error));
  };

  handleClick = (event) => {
    event.preventDefault();
    // Calls function that handles upload on click of button
    return this.props.handleUpload();
  };

  handleLike = (event, videoId) => {
    event.preventDefault();
    // Update number of likes on click of icon
    axios
      .put(`${videoEndpoint}/${videoId}/likes`)
      .then((response) => {
        // Update state of selected video to reflect new like count
        this.setState({ selectedVideo: response.data });
      })
      .catch((error) => console.log("Video not found", error));
  };

  render() {
    const { selectedVideo, videoList } = this.state;

    if (this.state.hasFetchingError) {
      // If there is an error getting data from server, show message
      return <p>Error loading data from server</p>;
    }

    const filteredVideos = videoList.filter((video) => {
      // Filter videos so that the selected video is removed
      // Passed to video recommendations component
      return video.id !== selectedVideo.id;
    });

    return videoList && selectedVideo ? (
      // If video list and selected video is loaded, show content.
      // If content not loaded, show loading spinner.
      <>
        {/* Show upload successful message when state is set to true */}
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
              handleLike={this.handleLike}
            />
            <CommentsForm
              comments={selectedVideo.comments}
              postComment={this.postComment}
              selectedVideoId={selectedVideo.id}
            />
            <Comments
              comments={selectedVideo.comments}
              date={this.millisecondsToDate}
              deleteComment={this.deleteComment}
              selectedVideoId={selectedVideo.id}
            />
          </div>
          <Recommendations videos={filteredVideos} />
        </main>
      </>
    ) : (
      // Loading spinner that shows when content is loading
      <div className="spinner">
        <ClipLoader
          size={150}
          color={"#0095FF"}
          loading={this.state.loading}
          speedMultiplier={0.75}
        />
      </div>
    );
  }
}

export default Home;
