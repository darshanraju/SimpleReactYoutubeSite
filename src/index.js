//Import modules
import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = "AIzaSyC1YIPzYXcMrMXrvIm2-whPJhJgLnF_E3c";

//Create a new component. This should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("Vegan Gains");
  }

  //YTSearch put inside constructor so we initally have some search results

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, searchResults => {
      this.setState({
        videos: searchResults,
        selectedVideo: searchResults[0]
      });
    });
  }

  //Passing in the current states videos, to video_list
  render() {
    return (
      <div>
        <div>
          <SearchBar
            onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
          />
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            //We are sending a callback the child 'onVideoSelect' to <VideoList>,
            //which passes the same callback to its child <video_list_item>, when
            //<video_list_item> is clicked. the callback travels back up to app,
            //where it changes the state with the selected video being the clicked on,
            //causing a rerender
            onVideoSelect={clickedVideo =>
              this.setState({ selectedVideo: clickedVideo })
            }
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

//Take this component's generated HTML and render it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector(".container"));
