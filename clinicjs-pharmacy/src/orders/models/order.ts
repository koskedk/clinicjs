import {OrderItem} from "./order-item";

export interface Order {
    orderId?: string;
    orderDate?: Date;
    orderNo?: string;
    patient?: string;
    provider?: string;
    orderItems?: OrderItem[];
    id?: string;
}
