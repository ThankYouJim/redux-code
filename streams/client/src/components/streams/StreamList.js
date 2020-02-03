import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  // showing delete/edit button is kinda like administrative buttons
  renderAdmin(stream) {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div className="right floated button">
          <button className="ui button">Edit</button>
          <button className="ui negative button">Delete</button>
        </div>
      );
    }
  }

  renderList() {
    return this.props.streams.map(stream => (
      <div className="item" key={stream.id}>
        {this.renderAdmin(stream)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <div className="header">{stream.title}</div>
          <div className="description">{stream.description}</div>
        </div>
      </div>
    ));
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <Link to="/streams/new" className="ui right floated button primary">Create Stream</Link>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <div className="ui celled list">{this.renderList()}</div>
        {this.renderCreate()}
      </div>    
    );
  }
}

/* Convert to an array for the props just so it's easier to map/iterate
 * (remember that in the reducers we used mapKeys to create an object)
*/
const mapStateToProps = state => {
  return { 
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
}

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);