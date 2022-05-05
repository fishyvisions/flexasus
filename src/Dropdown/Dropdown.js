import React from "react";
import PropTypes from "prop-types";
import { SimpleSelect } from "./Simple/SimpleSelect";
import { MultiSelect } from "./Multi/MultiSelect";

export const Dropdown = ({ type, ...props }) => {
  if (type === "multiple") {
    return <MultiSelect {...props} />;
  }
  return <SimpleSelect {...props} />;
};

Dropdown.propTypes = {
  iconColor: PropTypes.string,
  selectedIconColor: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  borderSpread: PropTypes.bool,
  spreadColor: PropTypes.string,
  dropdownHoverColor: PropTypes.string,
  dropdownColor: PropTypes.string,
  width: PropTypes.string,
  type: PropTypes.oneOf(["simple", "multiple"]),
  disabled: PropTypes.bool,
  tags: PropTypes.bool,
  selectedBgColor: PropTypes.string,
  selectedColor: PropTypes.string,
  options:PropTypes.array,
};

Dropdown.defaultProps = {
  iconColor: "#A0A3BD",
  bgColor: "#EFF0F7",
  color: "#14142B",
  spreadColor: "#BFBEFC",
  borderColor: "transparent",
  options: [
    "Apple",
    "Banana",
    "Blackberry",
    "Cherry",
    "Jackfruit",
    "Grape",
    "Guava",
    "Huckleberry",
    "Lychee",
    "Papaya",
    "Pineapple"
  ],
  type: "simple",
  dropdownHoverColor: "#cde3fa",
  selectedIconColor: "#6200ee",
};
