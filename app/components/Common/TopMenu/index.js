/**
*
* TopMenu
*
*/

import React from 'react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import PointerStyledCursor from '../Styles/PointerCursor';

import MaleAvatar from '../../../images/globalImage/male_avatar.png';

const shortid = require('shortid');

class TopMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      isMailDropdownOpen: false,
      isNotificationDropDownOpen: false,
      isProfileDropdownOpen: false,
    };

    this.toggleSideMenuBar = this.toggleSideMenuBar.bind(this);
    this.toggleMailDropDown = this.toggleMailDropDown.bind(this);
    this.toggleNotificationDropDown = this.toggleNotificationDropDown.bind(this);
    this.toggleProfileDropdown = this.toggleProfileDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick);
  }

  toggleSideMenuBar() {
    this.props.toggleSidebar(!this.props.isSideBarOpen);
  }

  toggleMailDropDown() {
    this.setState({
      isMailDropdownOpen: !this.state.isMailDropdownOpen,
    });
  }

  toggleNotificationDropDown() {
    this.setState({
      isNotificationDropDownOpen: !this.state.isNotificationDropDownOpen,
    });
  }

  toggleProfileDropdown() {
    this.setState({
      isProfileDropdownOpen: !this.state.isProfileDropdownOpen,
    });
  }

  handleClick() {
    if (this.state.isMailDropdownOpen || this.state.isNotificationDropDownOpen || this.state.isProfileDropdownOpen) {
      this.setState({
        isMailDropdownOpen: false,
        isNotificationDropDownOpen: false,
        isProfileDropdownOpen: false,
      });
    }
  }

  render() {
    return (
      <div>
        <header className="main-header">
          <Link to="/" className="logo">
            <span className="logo-mini"><b>P</b>C</span>
            <span className="logo-lg"><b>Periscope</b> Capitals</span>
          </Link>
          <nav className="navbar navbar-static-top">
            <PointerStyledCursor onLinkClick={this.toggleSideMenuBar} className="sidebar-toggle" role="button">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </PointerStyledCursor>

            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className={`dropdown messages-menu ${this.state.isMailDropdownOpen ? 'open' : ''}`}>
                  <PointerStyledCursor className="dropdown-toggle" onLinkClick={this.toggleMailDropDown} data-toggle="dropdown" aria-expanded={this.state.isMailDropdownOpen}>
                    <i className="fa fa-envelope-o"></i>
                    <span className="label label-success">{this.props.messageData.totalMessages}</span>
                  </PointerStyledCursor>
                  <ul className="dropdown-menu">
                    <li className="header">You have {this.props.messageData.totalMessages} messages</li>
                    <li>
                      <ul className="menu">
                        {
                          this.props.messageData.messageData.map((message) => (
                            <li key={`__messages_top_menu_${shortid.generate()}`}>
                              <a>
                                <div className="pull-left">
                                  <img src={message.image} className="img-circle" alt="User" />
                                </div>
                                <h4>
                                  {message.from}
                                </h4>
                                <p>{message.subject}</p>
                              </a>
                            </li>
                          ))
                        }
                      </ul>
                    </li>
                    <li className="footer"><Link to="/" className="footer">See All Messages</Link></li>
                  </ul>
                </li>
                <li className={`dropdown notifications-menu ${this.state.isNotificationDropDownOpen ? 'open' : ''}`}>
                  <PointerStyledCursor onLinkClick={this.toggleNotificationDropDown} className="dropdown-toggle" data-toggle="dropdown" aria-expanded={this.state.isNotificationDropDownOpen}>
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">{this.props.notificationData.totalNotifications}</span>
                  </PointerStyledCursor>
                  <ul className="dropdown-menu">
                    <li className="header">You have {this.props.notificationData.totalNotifications} notifications</li>
                    <li>
                      <ul className="menu">
                        {
                          this.props.notificationData.notifications.map((notification) => (
                            <li key={`__notification_top_menu_${shortid.generate()}`}>
                              <Link to={notification.link}>
                                <i className="fa fa-users text-aqua"></i> {notification.text}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>
                    </li>
                    <li className="footer"><Link to="/" className="footer">View all</Link></li>
                  </ul>
                </li>
                <li className={`dropdown user user-menu ${this.state.isProfileDropdownOpen ? 'open' : ''}`}>
                  <PointerStyledCursor onLinkClick={this.toggleProfileDropdown} className="dropdown-toggle" data-toggle="dropdown" aria-expanded={this.state.isProfileDropdownOpen}>
                    <img src={MaleAvatar} className="user-image" alt="User" />
                    <span className="hidden-xs">{this.props.profileData.name}</span>
                  </PointerStyledCursor>
                  <ul className="dropdown-menu">
                    <li className="user-header">
                      <img src={MaleAvatar} className="img-circle" alt="User" />
                      <p>
                        {this.props.profileData.name} - {this.props.profileData.jobTitle}
                        <small>Member since {this.props.profileData.memberSince}</small>
                      </p>
                    </li>
                    <li className="user-footer">
                      <div className="pull-left">
                        <Link to="/" className="btn btn-default btn-flat">Profile</Link>
                      </div>
                      <div className="pull-right">
                        <Link to="/" className="btn btn-default btn-flat">Sign out</Link>
                      </div>
                    </li>
                  </ul>
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
  messageData: PropTypes.object.isRequired,
  notificationData: PropTypes.object.isRequired,
  profileData: PropTypes.object.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
  isSideBarOpen: PropTypes.bool.isRequired,
};

export default TopMenu;
