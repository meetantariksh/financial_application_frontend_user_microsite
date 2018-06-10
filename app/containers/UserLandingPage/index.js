/**
 *
 * UserLandingPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectUserLandingPage, {
  makeSelectParentClassName,
  makeSelectIsSideBarOpen,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {
  toggleSidebar,
} from './actions';

import TopMenu from '../../components/Common/TopMenu/Loadable';
import SideMenu from '../../components/Common/SideMenu/Loadable';

// Dummy Data - These Data should be fetched from back end.....
const messagesData = {
  totalMessages: 3,
  messageData: [
    {
      from: 'Periscope Support Team',
      subject: 'Welcome to Periscope Capital Family',
      image: 'data:image/webp;base64,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',
    },
    {
      from: 'Periscope Support Team',
      subject: 'Guide to your account',
      image: 'data:image/webp;base64,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',
    },
    {
      from: 'Periscope Support Team',
      subject: 'Let us help you serve better',
      image: 'data:image/webp;base64,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',
    },
  ],
};

const notificationData = {
  totalNotifications: 3,
  notifications: [
    {
      text: 'Welcome to Periscope Capital Family',
      link: '',
    },
    {
      text: 'Guide to your account',
      link: '',
    },
    {
      text: 'Let us help you serve better',
      link: '',
    },
  ],
};

const profileData = {
  name: 'John Doe',
  jobTitle: 'Web Developer',
  memberSince: 'Nov. 2012',
};
// Dummy Data - These Data should be fetched from back end.....

export class UserLandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggleSideMenu = this.toggleSideMenu.bind(this);
  }

  toggleSideMenu(openSideBar) {
    this.props.dispatch(toggleSidebar(openSideBar));
  }

  render() {
    return (
      <div className={`${this.props.parentClassName} ${this.props.isSideBarOpen ? '' : 'sidebar-collapse'}`}>
        <Helmet>
          <title>Periscope Capitals - Home</title>
          <meta name="description" content="This is the Langing page for the User after login." />
        </Helmet>

        <TopMenu
          messageData={messagesData}
          notificationData={notificationData}
          profileData={profileData}
          toggleSidebar={this.toggleSideMenu}
          isSideBarOpen={this.props.isSideBarOpen}
        />

        <SideMenu
          profileData={profileData}
        />
      </div>
    );
  }
}

UserLandingPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  parentClassName: PropTypes.string.isRequired,
  isSideBarOpen: PropTypes.bool,
};

const mapStateToProps = createStructuredSelector({
  userlandingpage: makeSelectUserLandingPage(),
  parentClassName: makeSelectParentClassName(),
  isSideBarOpen: makeSelectIsSideBarOpen(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'userLandingPage', reducer });
const withSaga = injectSaga({ key: 'userLandingPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(UserLandingPage);
