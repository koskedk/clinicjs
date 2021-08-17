import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {OrderItem} from "./models/order-item";
import {useQuery} from "react-query";
import {Order} from "./models/order";
import service from "./services/orders.service";
import {ActiveList} from "./ActiveList";
import {InputText} from "primereact/inputtext";
import {RecieptDto} from "../inventory/models/reciept.dto";

interface Props {
    orderItem?: OrderItem
    onChange(e): void;
}

export const DispenseItem=(props: Props)=> {

    const handleChange = (e) => {
        e.preventDefault();
        props.onChange({...props.orderItem, [e.target.name]: e.target.value});
    };
    return (
        <div>
            <div className="p-field p-grid">
                <label className="p-col-fixed" style={{width:'100px'}}>{props.orderItem.drugCode}</label>
            </div>
            <div className="p-field p-grid">
                <label className="p-col-fixed" style={{width:'100px'}}>{props.orderItem.quantityPrescribed}</label>
            </div>
            <div className="p-field p-grid">
                <label htmlFor="quantityDispensed" className="p-col-fixed" style={{width:'100px'}}>Quantity Dispensed</label>
                <div className="p-col">
                    <InputText id="quantityDispensed" type="number"    name="quantityDispensed" onChange={handleChange}/>
                </div>
            </div>
        </div>
    );
}
