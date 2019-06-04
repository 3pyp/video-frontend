import React, { Component } from "react";
import VideoCard from "../../components/videoCard";
import { getVideosService } from "../../services/videoServices";

export default class videos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: "",
      message: ""
    };
  }

  componentDidMount() {
    this.getVideos();
  }

  getVideos = async () => {
    const videos = await getVideosService();
    videos
      ? this.setState({ videos })
      : this.setState({ message: "No se encontraron videos." });
  };

  showVideos = () => {
    return this.state.videos.length === 0 ? (
      <h3 className="text-warning">{this.state.message}</h3>
    ) : (
      this.state.videos.map(e => {
        return <VideoCard video={e} />;
      })
    );
  };

  render() {
    return <div className="Videos row col p-0 m-0">{this.showVideos()}</div>;
  }
}
