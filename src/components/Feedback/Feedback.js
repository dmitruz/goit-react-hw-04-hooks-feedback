import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "./Feedback.styled";

export default function Feedback({ options, onLeaveFeedback }) {
  return options.map((option) => (
    <Button type="Button" key={option} onClick={() => onLeaveFeedback(option)}>
      {option}
    </Button>
  ));
}

Feedback.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
