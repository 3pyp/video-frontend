import React, { Component } from "react";
import {Link} from 'react-router-dom'

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="Card_component col-12 col-md-4 col-lg-3 p-3">
        <div className="card p-0">
          <img
            src={this.props.video.thumbnail}
            className="card-img-top img-fluid"
            alt="Video"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.video.title}</h5>
            <p className="card-text">
            {this.props.video.description}
            </p>
            <Link to="/" className="btn btn-primary">
              Ver video
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
