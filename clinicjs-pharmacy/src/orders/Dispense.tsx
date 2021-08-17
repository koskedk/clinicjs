import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {OrderItem} from "./models/order-item";
import {useMutation, useQuery} from "react-query";
import {Order} from "./models/order";
import service from "./services/orders.service";
import {ActiveList} from "./ActiveList";
import {DispenseItem} from "./DispenseItem";
import {Button} from "primereact/button";
import {RecieptDto} from "../inventory/models/reciept.dto";


export const Dispense=()=> {

    let { orderId } = useParams();
    const [dispense, setDispense] = useState<OrderItem[]>([]);

    const { data, isLoading, error } = useQuery<Order, Error>("order", () =>
        service.getActiveOrder(orderId),
        { onSuccess: (data) => setDispense(data.orderItems) }
    );

    const mutation = useMutation(() => service.fullDispense(orderId), {
        onError: (err, variables, context) => {
            // eslint-disable-next-line no-console
            console.log(err);
        },
    });

    if (isLoading) {
        return <span>Loading...</span>;
    }

    if (error) {
        // @ts-ignore
        // eslint-disable-next-line no-console
        console.log(">>>", error);
        return <span>Error: {error.message}</span>;
    }

    //setDispense(data.orderItems);



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dispense);
        // @ts-ignore
        mutation.mutate(orderId);
    };

    const handleChange = (e:OrderItem) => {
        const idx= data.orderItems.findIndex(x=>x.id===e.id)
        const newTodos = [...dispense];
        newTodos[idx]=e;
        setDispense(newTodos);
    };

    return (
        <div>
            <h3>Dispense Orders | Patient: {data.patient}  Order:{data.orderNo}</h3>
            <form onSubmit={handleSubmit}>
                {data?.orderItems?.map((o)=>{
                    return (<DispenseItem orderItem={o} key={o.id} onChange={handleChange}/>)
                })}
                <div className="p-field p-grid">
                    <Button  type="submit" label="Submit" />
                </div>
            </form>
        </div>
    );
}
