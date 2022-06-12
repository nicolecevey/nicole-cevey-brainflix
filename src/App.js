import React from 'react';
import Home from './pages/Home/Home';
import PageNavigation from './components/PageNavigation/PageNavigation';
import Upload from "./pages/Upload/Upload";
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import '../src/styles/global.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App(){

	return (
		<BrowserRouter>
			<PageNavigation/>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/videos/:id" component={Home} />
				<Route path="/upload" component={Upload}/>
				<Route component={NotFoundPage} />
			</Switch>
		</BrowserRouter>
	)
}

export default App;
