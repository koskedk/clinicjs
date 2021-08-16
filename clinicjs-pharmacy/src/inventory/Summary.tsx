import React from "react";
import {useQuery} from "react-query";
import service from "./services/inventory.service";
import {InventorySummary} from "./models/inventory-summary";
import {SummaryList} from "./SummaryList";

export const  Summary=()=> {
    const { data, isLoading, error } = useQuery<InventorySummary, Error>("drugs", () =>
        service.getInventorySummary()
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
            TOTAL DRUGS:{data.totalDrugs} | IN STOCK:{data.totalInStock} | OUT OF STOCK:{data.totalOutOfStock}
            <hr/>
            IN STOCK
            <SummaryList drugs={data.inStockDrugStats} />
            OUT OF STOCK
            <SummaryList drugs={data.outOfStockDrugStats} />
        </div>
    );
}
