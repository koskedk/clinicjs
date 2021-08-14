import React from "react";
import { Drug } from "./models/drug";

interface Props extends Drug {}

export const ProductItem = (props: Props) => {
  return (
    <li>
      {props.code} | {props.name} | {props.id}
    </li>
  );
};
