import React, { useState } from "react";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Order} from "./models/order";
import {Button} from "primereact/button";
import {Link} from "react-router-dom";

interface Props {
  orders?: Order[];
}

export const ActiveList = (props: Props) => {
    const openDispense = (rowdata) => {
        console.log(rowdata);
    }

    const actionBodyTemplate = (rowData: Order) => {
        return (
            <React.Fragment>
                <Link to={{
                    pathname: `/pharmacy/dispense/${rowData.orderId}`,
                    orderItems:  rowData.orderItems
                }
                }>
                    <Button label="Dipsense"/>
                </Link>
            </React.Fragment>
        );
    }

    return (
        <DataTable value={props.orders}>
            <Column field="orderNo" header="Code"/>
            <Column field="patient" header="Name"></Column>
            <Column field="orderDate" header="Quantity"></Column>
            <Column body={actionBodyTemplate}></Column>
        </DataTable>
    );
};
