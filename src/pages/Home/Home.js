import React from 'react';
import Video from '../../components/Video/Video';
import Details from '../../components/Details/Details';
import CommentsForm from '../../components/CommentsForm/CommentsForm';
import Recommendations from '../../components/Recommendations/Recommendations';
import Comments from '../../components/Comments/Comments';
import axios from 'axios';

const BASE_URL = "https://project-2-api.herokuapp.com";
const API_KEY = "891f1817-ac84-4209-a143-55ea13d0e233";
const apiKeyString = `?api_key=${API_KEY}`;
const getVideoEndpoint = `${BASE_URL}/videos${apiKeyString}`;

class Home extends React.Component {
	state = {
		selectedVideo: null,
	}
		 
	componentDidMount() {
		axios
			.get(getVideoEndpoint)
			.then((response) => {

				const activeVideoId = this.props.match.params.id || response.data[0].id;
				this.fetchActiveVideo(activeVideoId);
				console.log(activeVideoId)
		});
	}	

	fetchActiveVideo = (videoId) => {
		axios
		  .get(`${BASE_URL}/videos/${videoId}${apiKeyString}`)
		  .then((response) => {
			this.setState({
			  selectedVideo: response.data.video +apiKeyString,
			});
		  });
	  };
	
	// componentDidUpdate(previousProps) {
	// 	const previousId = previousProps.match.params.id;
	// 	const currentId = this.props.match.params.id;
	
	// 	// Only update the active album if we are on a new url!
	// 	if (previousId !== currentId) {
	// 	  this.fetchActiveVideo(currentId);
	// 	}
	//   }
	

	millisecondsToDate = (milliseconds) => {
		let date = new Date(milliseconds);
		return date.toLocaleDateString("en-US", {
			month: "2-digit", 
			day: "2-digit", 
			year: "numeric"  
		})
	}


	render() {
		const { selectedVideo } = this.state;
		console.log(selectedVideo)

		return (			
			<>

				<Video selectedVideo={selectedVideo}/>

				<main className="main">
					{/* <div>
						<Details 
							selectedVideo={this.state.selectedVideo} 
							date={this.millisecondsToDate}/>
						<CommentsForm selectedVideo={this.state.selectedVideo}/>
						<Comments 
							selectedVideo={this.state.selectedVideo}
							date={this.millisecondsToDate}/>
					</div>
					<Recommendations 
						videos={nonSelectedVideos} 
						handleVideoChange={this.handleVideoChange}/> */}
				</main>
			</>
		);
	}
}

export default Home;