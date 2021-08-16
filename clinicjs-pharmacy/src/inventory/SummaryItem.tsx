import React, { useState } from "react";
import {DrugStats} from "./models/drug-stats";

interface Props extends DrugStats {
  show: boolean;
  onAdjust(id: string): void;
}

export const SummaryItem = (props: Props) => {
  return (
    <div>
      <li>
        {props.name} | {props.totalIn} | {props.id}
      </li>
    </div>
  );
};
/*
 <input
          type="button"
          value={props.show ? "Cancel" : "Adjust"}
          onClick={() => props.onAdjust(props.id)}
        />
        <div style={{ display: props.show ? "block" : "none" }}>
          <StockReceipt id={props.id} />
        </div>
 */
