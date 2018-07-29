/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';

import UserLandingPage from '../UserLandingPage/Loadable';
import SeccondfactorAuthentication from '../SeccondfactorAuthentication/Loadable';
import ApplicationLoading from '../../components/ApplicationLoading';

import {

} from '../SeccondfactorAuthentication/actions';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loadingAuthentication: true,
      loadingAuthenticationComplete: false,
      loadingAuthenticationError: false,
      isUserAuthenticated: false,
      userProfile: {},
      secconFactorAuth: {},
    };
  }

  componentWillMount() {
    this.setState({
      loadingAuthentication: true,
    });
    axios({
      method: 'get',
      url: `${_globals.config.base_server_url}authentication/fetchAuthenticationDetails`,
      headers: {
        PC_AUTH_HEADER: `PC_AUTH_BEARER${window.sessionStorage.getItem(_globals.config.login_session_storage_name)}`,
      },
    }).then((response) => {
      const data = response.data;
      if (!data.userFullyAuthenticated) {
        this.setState({
          loadingAuthentication: false,
          loadingAuthenticationComplete: true,
          isUserAuthenticated: false,
          userProfile: data.userProfileCollection,
          secconFactorAuth: data.seccondFactorAuthenticationDetails,
        });
      } else {
        this.setState({
          loadingAuthentication: false,
          loadingAuthenticationComplete: true,
          isUserAuthenticated: true,
          userProfile: data.userProfileCollection,
        });
      }
    }).catch((error) => {
      console.log(error);
      this.setState({
        loadingAuthentication: false,
        loadingAuthenticationComplete: false,
        loadingAuthenticationError: true,
      });
    });
  }

  render() {
    if (this.state.loadingAuthentication) {
      return (
        <div>
          <ApplicationLoading />
        </div>
      );
    } else if (this.state.loadingAuthenticationComplete) {
      if (!this.state.isUserAuthenticated) {
        return (
          <SeccondfactorAuthentication
            userProfile={this.state.userProfile}
            secconFactorAuth={this.state.secconFactorAuth}
          />
        );
      }
      return (
        <div>
          <UserLandingPage
            userProfile={this.state.userProfile}
          />
        </div>
      );
    }
    window.location = _globals.config.home_page_redirection;
    return (
      <div />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapDispatchToProps);

export default compose(
  withConnect,
)(App);
