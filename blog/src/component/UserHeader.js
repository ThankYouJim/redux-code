import React from 'react';
import { connect } from 'react-redux';

import { fetchUser } from '../actions'; // technically not needed now


class UserHeader extends React.Component {
  componentDidMount() {
    // this.props.fetchUser(this.props.userId);
  }

  render() {
    const {user} = this.props;
    if (!user) {
      return null;
    }
    
    return (
      <div className="header">
        {user.name}
      </div>
    );
  }
}

// use ownProps as we cannot react this.props here
const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(u=>u.id===ownProps.userId) };
}

export default connect(
  mapStateToProps, 
  { fetchUser } // technically not needed now
)(UserHeader);