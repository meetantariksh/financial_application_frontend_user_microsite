/**
 *
 * SeccondfactorAuthentication
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
import makeSelectSeccondfactorAuthentication from './selectors';
import reducer from './reducer';
import saga from './saga';

import UserLandingPage from '../UserLandingPage/Loadable';
import MaleAvatar from '../../images/globalImage/male_avatar.png';

import {
  setSeccondFactorValidation,
} from './actions';

export class SeccondfactorAuthentication extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);

    this.state = {
      userProfile: {},
      validationStep: 'Select',
      hasError: false,
      errorText: '',
      validationInputValue: '',
    };

    this.renderComponent = this.renderComponent.bind(this);
    this.onSelectSecurityQuestions = this.onSelectSecurityQuestions.bind(this);
    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillMount() {
    document.body.className = 'hold-transition lockscreen';
    this.setState({
      userProfile: this.props.userProfile,
    });
    this.props.dispatch(setSeccondFactorValidation(this.props.secconFactorAuth));
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  onSelectSecurityQuestions() {
    if (this.props.seccondfactorauthentication.seccond_factor_validation.isSecurityQuestionsBlocked) {
      this.setState({
        hasError: true,
        errorText: 'Security Questions option has been disabled due to maximum invalid attempts. Pleas select a different option.',
      });
    } else {
      this.setState({
        hasError: false,
        validationStep: 'SecurityQuestions',
      });
    }
  }

  onChangeInputValue(event) {
    this.setState({
      hasError: false,
      validationInputValue: event.target.value,
    });
  }

  onSubmit() {
    if(this.state.validationInputValue === '') {
      this.setState({
        hasError: true,
        errorText: 'Please provide an input.',
      });
    }else{
      
    }
  }

  renderComponent() {
    switch (this.state.validationStep) {
      case 'Select': {
        return (
          <div>
            <div className="lockscreen-name" style={{ fontSize: '120%' }}>Choose your Authentication method.</div>
            <br />
            <div className="box-body" style={{ textAlign: 'center' }}>
              <a className="btn btn-app" style={{ minWidth: '180px' }} onClick={this.onSelectSecurityQuestions}>
                <i className="fa fa-question"></i> Security Questions
              </a>
              <a className="btn btn-app" style={{ minWidth: '180px' }}>
                <i className="fa fa-envelope-open-o"></i> Mail
              </a>
            </div>
          </div>
        );
      }

      case 'SecurityQuestions': {
        return (
          <div>
            <div className="lockscreen-name" style={{ fontSize: '120%' }}>{this.props.seccondfactorauthentication.seccond_factor_validation.securityQuestionText}</div>
            <br />
            <br />
            <div className="lockscreen-item">
              <div className="lockscreen-image">
                <img src={MaleAvatar} alt="" />
              </div>

              <div className="input-group">
                <input type="password" className="form-control" placeholder="Your Answer" style={{ paddingLeft: '35%' }} value={this.state.validationInputValue} onChange={(event) => this.onChangeInputValue(event)} />

                <div className="input-group-btn">
                  <button type="button" className="btn" onClick={this.onSubmit}><i className="fa fa-arrow-right text-muted"></i></button>
                </div>
              </div>

            </div>
          </div>
        );
      }

      default: {
        return (
          <div />
        );
      }
    }
  }

  render() {
    if (this.state.validationStep === 'Authenticted') {
      return (
        <UserLandingPage
          userProfile={this.state.userProfile}
        />
      );
    }
    return (
      <div>
        <Helmet>
          <title>Seccond Factor Authentication</title>
          <meta name="description" content="Description of SeccondfactorAuthentication" />
        </Helmet>

        <div className="lockscreen-wrapper">
          <div className="lockscreen-logo">
            <b>Periscope</b> Capitals
          </div>
          <div className="lockscreen-name">Welcome, {this.state.userProfile.first_name}</div>
          <br />
          {this.renderComponent()}
          <br />
          {
            this.state.hasError &&
            <div className='text-center' style={{ color: 'red', fontSize: '105%' }}>
              <b>{this.state.errorText}</b>
            </div>
          }
          <br />
          <div className="help-block text-center">
            Your security is important to us. Which is why, this application uses a seccond factor authentication for you to identify yourself before you can view your data.
          </div>
        </div>
      </div>
    );
  }
}

SeccondfactorAuthentication.propTypes = {
  dispatch: PropTypes.func.isRequired,
  userProfile: PropTypes.object,
  secconFactorAuth: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  seccondfactorauthentication: makeSelectSeccondfactorAuthentication(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'seccondfactorAuthentication', reducer });
const withSaga = injectSaga({ key: 'seccondfactorAuthentication', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(SeccondfactorAuthentication);
