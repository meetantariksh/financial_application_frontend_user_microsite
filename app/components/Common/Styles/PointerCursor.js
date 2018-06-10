import styled from 'styled-components';
import PropTypes from 'prop-types';

import React from 'react';

class Link extends React.Component {
  constructor(props) {
    super(props);

    this.onLinkClick = this.onLinkClick.bind(this);
  }

  onLinkClick() {
    if (this.props.onLinkClick && {}.toString.call(this.props.onLinkClick) === '[object Function]') {
      this.props.onLinkClick();
    }
  }

  render() {
    return (
      <a className={this.props.className} onClick={this.onLinkClick} role="tree" tabIndex={0}>
        {this.props.children}
      </a>
    );
  }
}

const StyledLinkCursor = styled(Link)`
    cursor: pointer
  `;

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  onLinkClick: PropTypes.func,
};

export default StyledLinkCursor;
