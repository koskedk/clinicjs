import React, { useState } from "react";
import { Drug } from "./models/drug";
import { StockReceipt } from "./StockReceipt";

interface Props extends Drug {
  show: boolean;
  onAdjust(id: string): void;
}

export const ProductItem = (props: Props) => {
  return (
    <div>
      <li>
        {props.code} | {props.name} | {props.id}
        <input
          type="button"
          value={props.show ? "Cancel" : "Adjust"}
          onClick={() => props.onAdjust(props.id)}
        />
        <div style={{ display: props.show ? "block" : "none" }}>
          <StockReceipt id={props.id} />
        </div>
      </li>
    </div>
  );
};
