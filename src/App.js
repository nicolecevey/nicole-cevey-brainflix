import React from "react";
import Home from "./pages/Home/Home";
import PageNavigation from "./components/PageNavigation/PageNavigation";
import Upload from "./pages/Upload/Upload";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import "../src/styles/global.scss";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends React.Component {
  state = {
    uploadSuccessful: false,
  };

  // Handle upload of new video
  handleUpload = () => {
    // Set state to show whether upload was successful
    // Will be used for success message
    this.setState({
      uploadSuccessful: !this.state.uploadSuccessful,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <PageNavigation />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => (
              <Home
                {...routerProps}
                uploadSuccessful={this.state.uploadSuccessful}
                handleUpload={this.handleUpload}
              />
            )}
          />
          <Route path="/videos/:id" component={Home} />
          <Route
            path="/upload"
            render={(routerProps) => (
              <Upload {...routerProps} handleUpload={this.handleUpload} />
            )}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
