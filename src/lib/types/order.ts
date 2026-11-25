import { OrderStatus } from "../enums/order.enum";
import { Product } from "./product";

export interface OrderItemInput {
    itemQuantity: number;
    itemPrice: number;
    productId: string;
    orderId?: string;
}

export interface OrderItem {     //orderItem collection uchun, orderItem schema uchun
    _id: string;
    itemQuantity: number;
    itemPrice: number;
    orderId: string;
    productId: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Order {     //order collection uchun, order schema uchun
    _id: string;
    orderTotal: number;
    orderDelivery: number;
    orderStatus: OrderStatus;
    memberId: string;
    createdAt: Date;
    updatedAt: Date;

    /** from aggregation */
    orderItems: OrderItem[];
    productData: Product[];
}


export interface OrderInquiry {
    page: number;
    limit: number;
    orderStatus: OrderStatus;
}


export interface OrderUpdateInput {
    orderId: string;
    orderStatus: OrderStatus;
}
