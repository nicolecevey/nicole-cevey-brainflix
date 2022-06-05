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

  componentDidUpdate(previousProps) {
    window.scrollTo(0, 0)
    const previousId = previousProps.match.params.id;
    const currentId = this.props.match.params.id;

      // Only update the active video if we are on a new url!
    if (previousId !== currentId) {
      if (typeof currentId === "undefined") {
        const defaultVideoId = this.state.videoList[0].id;
        return this.fetchActiveVideo(defaultVideoId)
          .then((response) => {
            this.setState({
              selectedVideo: response.data
            });
          })
      }
      this.fetchActiveVideo(currentId)
        .then((response) => {
          this.setState({
            selectedVideo: response.data
          });
          console.log(currentId)
        })
    }
  }

  fetchActiveVideo = (videoId) => {
    return axios.get(`${BASE_URL}/videos/${videoId}${apiKeyString}`);
  };

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
    const filteredVideos = this.state.videoList.filter((video) => {
      return video.id !== this.state.selectedVideo.id;
    });
    return videoList && selectedVideo ? (
      <>
        <Video selectedVideo={selectedVideo.image} />
        <main className="main">
          <div>
            <Details
              selectedVideo={selectedVideo}
              date={this.millisecondsToDate}
            />
            <CommentsForm comments={selectedVideo.comments}/>
            <Comments
              comments={selectedVideo && selectedVideo.comments}
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
