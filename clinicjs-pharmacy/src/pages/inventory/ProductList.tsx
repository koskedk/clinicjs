import React from "react";
import { Drug } from "./models/drug";
import { ProductItem } from "./ProductItem";

interface Props {
  drugs?: Drug[];
}

export const ProductList = (props: Props) => {
  return (
    <ul>
      {props.drugs.map((d, index) => {
        return <ProductItem {...d} key={index} />;
      })}
    </ul>
  );
};
