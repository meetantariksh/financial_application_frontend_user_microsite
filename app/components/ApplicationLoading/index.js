/**
*
* ApplicationLoading
*
*/

import React from 'react';
// import styled from 'styled-components';


class ApplicationLoading extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    document.body.className = 'hold-transition lockscreen';
  }

  componentWillUnmount() {
    document.body.className = '';
  }

  render() {
    return (
      <div>
        <div className="lockscreen-wrapper">
          <div className="lockscreen-logo">
            <b>Periscope</b> Capitals
          </div>
          <div className="box box-danger">
            <div className="box-header" style={{ textAlign: 'center', paddingBottom: '10%' }}>
              <h3 className="box-title">Loading</h3>
            </div>
            <div className="box-body" style={{ textAlign: 'center', paddingTop: '10%' }}>
              Please wait while we load the application.
            </div>
            <div className="overlay">
              <i className="fa fa-refresh fa-spin"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ApplicationLoading.propTypes = {

};

export default ApplicationLoading;
