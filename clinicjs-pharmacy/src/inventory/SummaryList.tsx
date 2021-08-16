import React, { useState } from "react";
import { SummaryItem } from "./SummaryItem";
import {DrugStats} from "./models/drug-stats";

interface Props {
  drugs?: DrugStats[];
}

export const SummaryList = (props: Props) => {
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
          <SummaryItem
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

