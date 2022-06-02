import React from 'react';
import './App.scss';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import Video from './components/Video/Video';
import Upload from "./pages/Upload/Upload";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App(){

	return (
		<>
		<BrowserRouter>
			<Nav/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/video/:id" exact component={Video} />
				<Route path="/upload" component={Upload}/>
			</Switch>
		</BrowserRouter>
		</>
	)
}

export default App;
