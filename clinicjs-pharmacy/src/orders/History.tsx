import React from "react";
import {useQuery} from "react-query";
import service from "./services/orders.service";
import {Order} from "./models/order";
import {OrderList} from "primereact/orderlist";
import {ActiveList} from "./ActiveList";
import {HistoryList} from "./HistoryList";

export const  History=()=> {
    const { data, isLoading, error } = useQuery<Order[], Error>("orders", () =>
        service.getHistory()
    );

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        // @ts-ignore
        // eslint-disable-next-line no-console
        console.log(">>>", error);
        return <span>Error: {error.message}</span>;
    }

    return (
        <div>
            <h3>Orders History</h3>
            <HistoryList orders={data} />
        </div>
    );
}
