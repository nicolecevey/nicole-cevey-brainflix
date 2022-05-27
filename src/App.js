import React from 'react';
import './App.scss';
import Nav from './components/Nav/Nav';
import Video from './components/Video/Video';
import videos from './data/videos.json';
import videoDetails from './data/video-details.json';
import Details from './components/Details/Details';
import CommentsForm from './components/CommentsForm/CommentsForm';
import Recommendations from './components/Recommendations/Recommendations';
import Comments from './components/Comments/Comments';

class App extends React.Component {
	state = {
		selectedVideo: videoDetails[0],
	}

	handleVideoChange = (videoId) => {
		const newSelectedVideo = videoDetails.find((video) => videoId === video.id)
		
		this.setState({
			selectedVideo: newSelectedVideo
		});		
	}
	render() {
		
		const nonSelectedVideos = videos.filter((video) => {
			return video.id !== this.state.selectedVideo.id;
		});
		
		return (
			<>
				<Nav/>
				<Video
					selectedVideo={this.state.selectedVideo}
				/>
				<div className="container"/>
					<Details selectedVideo={this.state.selectedVideo} />
					<CommentsForm selectedVideo={this.state.selectedVideo}/>
					<Comments selectedVideo={this.state.selectedVideo}/>
					<Recommendations 
						videos={nonSelectedVideos} 
						handleVideoChange={this.handleVideoChange}/>
			</>
		);
	}
}

export default App;
