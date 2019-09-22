import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = props => {
  //'props' is any search results passed into it from index.js

  const videoItems = props.videos.map(video => {
    //iterating through each video (mapping) and sending each video as a prop into the 'video_list_item' component
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag} //React prefers 'lists' over 'array' and each element in a list needs a unique tag, and the YTSeach api give a unique tag for each video result called 'etag' so we are assigning it as the key
        video={video}
      />
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
