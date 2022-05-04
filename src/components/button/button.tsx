import { Button as AntDdButton } from "antd";
import React from "react";

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return <AntDdButton title={props.label}>{props.label}</AntDdButton>;
};

export default Button;
