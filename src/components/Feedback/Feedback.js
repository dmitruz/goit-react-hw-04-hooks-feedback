import React from "react";
import { PropTypes } from "prop-types";
import OptionButton from './OptionButton';

export default function Feedback({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <OptionButton type="Button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </OptionButton>
  ));
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

