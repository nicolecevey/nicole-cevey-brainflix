import React from "react";
import Video from "../../components/Video/Video";
import Details from "../../components/Details/Details";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Recommendations from "../../components/Recommendations/Recommendations";
import Comments from "../../components/Comments/Comments";
import axios from "axios";

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "891f1817-ac84-4209-a143-55ea13d0e233";
const apiKeyString = `?api_key=${API_KEY}`;
const getVideoEndpoint = `${BASE_URL}/videos${apiKeyString}`;

class Home extends React.Component {
  state = {
    selectedVideo: null,
    videoList: [],
  };

  componentDidMount() {
    axios.get(getVideoEndpoint).then((response) => {
      const activeVideoId = this.props.match.params.id || response.data[0].id;
      this.fetchActiveVideo(activeVideoId).then((activeVideoResponse) => {
        this.setState({
		      videoList: response.data,
          selectedVideo: activeVideoResponse.data,
        });
      });
    });
  }

  fetchActiveVideo = (videoId) => {
    return axios.get(`${BASE_URL}/videos/${videoId}${apiKeyString}`);
  };

  componentDidUpdate(previousProps) {
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;
    // Only update the active video if we are on a new url!
    if (previousId !== currentId) {
      this.fetchActiveVideo(currentId)
    }
  }

  handleVideoChange = (videoId) => {
		// const newSelectedVideo = this.state.videoList.find((video) => videoId === video.id)
    axios.get(getVideoEndpoint).then((response) => {
      this.fetchActiveVideo(videoId).then((response) =>
        this.setState({
          selectedVideo: response.data
        }))
        // if (this.state.videoList.includes(videoId)) {
        //   this.state.videoList.pop(videoId)
        // }
      })
    }
	

  millisecondsToDate = (milliseconds) => {
    let date = new Date(milliseconds);
    return date.toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    });
  };

  render() {
    const { selectedVideo, videoList } = this.state;
    return videoList && selectedVideo ? (
      <>
        <Video selectedVideo={selectedVideo.image} />
        <main className="main">
          <div>
            <Details
              selectedVideo={selectedVideo}
              date={this.millisecondsToDate}
            />
            <CommentsForm />
            <Comments
              comments={selectedVideo && selectedVideo.comments}
              date={this.millisecondsToDate}
            />
          </div>
          <Recommendations 
            videos={videoList}
            handleVideoChange={this.handleVideoChange} 
            />
        </main>{" "}
      </>
    ) : (
      <h1>Loading...</h1>
    );

  }
}

export default Home;
