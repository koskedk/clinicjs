import React from "react";
import {useQuery} from "react-query";
import service from "./services/orders.service";
import {Order} from "./models/order";
import {OrderList} from "primereact/orderlist";
import {ActiveList} from "./ActiveList";

export const  Active=()=> {
    const { data, isLoading, error } = useQuery<Order[], Error>("drugs", () =>
        service.getActive()
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
            <h3>Active Orders</h3>
            <ActiveList orders={data} />
        </div>
    );
}
