import React from 'react';
import PropTypes from 'prop-types';

export default function Section({ title, children }) {
  return (
    <div>
      <h3 className="title">{title}</h3>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};