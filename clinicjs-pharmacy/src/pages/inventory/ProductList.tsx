import React, { useState } from "react";
import { Drug } from "./models/drug";
import { ProductItem } from "./ProductItem";

interface Props {
  drugs?: Drug[];
}

export const ProductList = (props: Props) => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const ads = (id: string) => {
    setShow(!show);
    setId(id);
    // eslint-disable-next-line no-console
    console.log(`${id}  ${show}`);
  };

  return (
    <ul>
      {props.drugs.map((d, index) => {
        return (
          <ProductItem
            show={show && d.id === id}
            {...d}
            key={index}
            onAdjust={ads}
          />
        );
      })}
    </ul>
  );
};
