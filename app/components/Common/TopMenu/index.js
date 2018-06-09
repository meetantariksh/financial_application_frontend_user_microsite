/**
*
* TopMenu
*
*/

import React from 'react';
// import styled from 'styled-components';

import MaleAvatar from '../../../images/globalImage/male_avatar.png';

class TopMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.toggleSideMenuBar = this.toggleSideMenuBar.bind(this);
  }

  toggleSideMenuBar() {

  }

  render() {
    return (
      <div>
        <header className="main-header">
          <a href="../../index2.html" className="logo">
            <span className="logo-mini"><b>P</b>C</span>
            <span className="logo-lg"><b>Periscope</b> Capitals</span>
          </a>
          <nav className="navbar navbar-static-top">
            <a className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </a>

            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown messages-menu">
                  <a className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">4</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 4 messages</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a>
                            <div className="pull-left">
                              <img src={MaleAvatar} className="img-circle" alt="User" />
                            </div>
                            <h4>
                              Support Team
                              <small><i className="fa fa-clock-o"></i> 5 mins</small>
                            </h4>
                            <p>Why not buy a new awesome theme?</p>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="#">See All Messages</a></li>
                  </ul>
                </li>
                <li className="dropdown notifications-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">10</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 10 notifications</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-users text-aqua"></i> 5 new members joined today
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer"><a href="#">View all</a></li>
                  </ul>
                </li>
                <li className="dropdown tasks-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-flag-o"></i>
                    <span className="label label-danger">9</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 9 tasks</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <h3>
                              Design some buttons
                              <small className="pull-right">20%</small>
                            </h3>
                            <div className="progress xs">
                              <div className="progress-bar progress-bar-aqua" style="width: 20%" role="progressbar"
                                  aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">
                                <span className="sr-only">20% Complete</span>
                              </div>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="footer">
                      <a href="#">View all tasks</a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <img src="../../dist/img/user2-160x160.jpg" className="user-image" alt="User Image" />
                    <span className="hidden-xs">Alexander Pierce</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src="../../dist/img/user2-160x160.jpg" className="img-circle" alt="User Image" />

                      <p>
                        Alexander Pierce - Web Developer
                        <small>Member since Nov. 2012</small>
                      </p>
                    </li>
                    <li className="user-body">
                      <div className="row">
                        <div className="col-xs-4 text-center">
                          <a href="#">Followers</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Sales</a>
                        </div>
                        <div className="col-xs-4 text-center">
                          <a href="#">Friends</a>
                        </div>
                      </div>
                    </li>
                    <li className="user-footer">
                      <div className="pull-left">
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

TopMenu.propTypes = {

};

export default TopMenu;
