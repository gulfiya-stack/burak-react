import { serverApi } from "../../lib/config";
import axios from "axios";
import { CartItem } from "../../lib/types/search";
import { Order, OrderInquiry, OrderItemInput } from "../../lib/types/order";

class OrderService {
    private readonly path: string;

    constructor() {
        this.path = serverApi;
    }

    public async createOrder(input: CartItem[]): Promise<Order> {
        try {
            const orderItems: OrderItemInput[] = input.map((cartItem: CartItem) => {
                return {
                    itemPrice: cartItem.price,
                    itemQuantity: cartItem.quantity,
                    productId: cartItem._id,
                }
            });

            console.log("orderItems object: ", orderItems);
            const url = this.path + "/order/create";
            const result = await axios.post(url, orderItems, { withCredentials: true });
            console.log("createOrder: ", result);
            return result.data;
        }
        catch (err) {
            console.log("Error, createOrder: ", err);
            throw err;
        }
    };

    public async getMyOrders(input: OrderInquiry): Promise<Order[]> {
        try {
            // axios.defaults.withCredentials = true;
            const query = `?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;
            // const url = `${this.path}/order/all${query}`;
            const url = `${this.path}/order/all`;
            const result = await axios.get(url + query, { withCredentials: true });

            return result.data;
        }
        catch (err) {
            console.log("Error, getMyOrders: ", err);
            throw err;
        }
    }
};

export default OrderService;