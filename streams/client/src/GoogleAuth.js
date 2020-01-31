import React from 'react';
import { connect } from 'react-redux';

import { signIn, signOut } from './actions';

class GoogleAuth extends React.Component {
  state = { isSignedIn: null }  // just to help store the isSignedIn from oauth

  componentDidMount() {
    // need the 'windows' so gapi knows it's available in the windows scope
    window.gapi.load('client:auth2', ()=> {
      window.gapi.client.init({
        clientId: '638456910349-fvsadlk18dmm5ojkf5ep9ls7jprtcbvo.apps.googleusercontent.com',
        // what will the oauth grab
        scope: 'email'
      })
      .then(()=> {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return null;
    } else if (this.state.isSignedIn) {
      return (
      <button onClick={this.onSignOutClick} className="ui red google button">
        <i className="google icon" />Sign Out
      </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />Sign In
        </button>
        );
    }
  }
  
  render() {
    return (
      <div>
        {this.renderAuthButton()}
      </div>
    );
  }
}

export default connect(
  null,
  { signIn, signOut }
)(GoogleAuth);