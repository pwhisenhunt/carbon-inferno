import React from 'react';
import PropTypes from 'prop-types';

const SPACE_KEY_CODE = 32;

const MenuIcon = ({ onClick, icon }) => (
  <div
    role="button"
    tabIndex={0}
    onClick={onClick}
    onKeyDown={(e) => {
      if (e.keyCode === SPACE_KEY_CODE) {
        onClick(e);
      }
    }}
  >
    {icon}
  </div>
);

MenuIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.node.isRequired,
};
export default MenuIcon;
