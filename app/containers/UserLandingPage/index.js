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
} from './selectors';
import reducer from './reducer';
import saga from './saga';

export class UserLandingPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className={this.props.parentClassName}>
        <Helmet>
          <title>Periscope Capitals - Home</title>
          <meta name="description" content="This is the Langing page for the User after login." />
        </Helmet>
      </div>
    );
  }
}

UserLandingPage.propTypes = {
  parentClassName: PropTypes.string.isRequired,
};

const mapStateToProps = createStructuredSelector({
  userlandingpage: makeSelectUserLandingPage(),
  parentClassName: makeSelectParentClassName(),
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
