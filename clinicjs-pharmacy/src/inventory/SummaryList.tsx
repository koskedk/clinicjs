import React, { useState } from "react";
import {DrugStats} from "./models/drug-stats";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

interface Props {
  drugs?: DrugStats[];
}

export const SummaryList = (props: Props) => {
  return (
      <DataTable value={props.drugs}>
        <Column field="code" header="Code"/>
        <Column field="name" header="Name"></Column>
        <Column field="quantityInStock" header="Quantity"></Column>
        <Column field="totalIn" header="In"></Column>
        <Column field="totalOut" header="Out"></Column>
        <Column field="id" header="id"></Column>
      </DataTable>
  );
};
