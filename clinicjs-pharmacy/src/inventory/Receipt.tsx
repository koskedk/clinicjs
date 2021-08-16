import React, { useState } from "react";
import { useMutation } from "react-query";
import service from "./services/inventory.service";
import { RecieptDto } from "./models/reciept.dto";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";

interface Props {
    id?: string;
}

export const Receipt=(props: Props)=> {
    const [stock, setStock] = useState<RecieptDto>({});

    const mutation = useMutation(() => service.adjustStock(stock), {
        onError: (err, variables, context) => {
            // eslint-disable-next-line no-console
            console.log(err);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // @ts-ignore
        mutation.mutate(stock);
    };
    const handleChange = (e) => {
        e.preventDefault();
        setStock({ ...stock, [e.target.name]: e.target.value });
    };

    return (

        <div>
            <form onSubmit={handleSubmit}>
            <div className="p-field p-grid">
                <label htmlFor="drugId" className="p-col-fixed" style={{width:'100px'}}>drugId</label>
                <div className="p-col">
                    <InputText id="drugId" type="text"    name="drugId" onChange={handleChange}/>
                </div>
            </div>
            <div className="p-field p-grid">
                <label htmlFor="batchNo" className="p-col-fixed" style={{width:'100px'}}>batchNo</label>
                <div className="p-col">
                    <InputText id="batchNo" type="text"  name="batchNo" onChange={handleChange}/>
                </div>
            </div>
            <div className="p-field p-grid">
                <label htmlFor="quantity" className="p-col-fixed" style={{width:'100px'}}>quantity</label>
                <div className="p-col">
                    <InputText id="quantity" type="text"  name="quantity" onChange={handleChange}/>
                </div>
            </div>
                <div className="p-field p-grid">
                    <Button  type="submit" label="Submit" />
                </div>
            </form>
        </div>
    );
}
