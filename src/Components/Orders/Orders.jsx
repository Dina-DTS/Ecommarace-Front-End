import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import {jwtDecode} from "jwt-decode";
import Style from "./Orders.module.css/";
import { UserContext } from "../../Context/UserContext";

export default function Orders() {
    const { token } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                if (!token) {
                    setError("User not authenticated");
                    setLoading(false);
                    return;
                }

                const decoded = jwtDecode(token);
                const userId = decoded.id; // Extract user ID

                const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setOrders(response.data);
            } catch (err) {
                setError("Failed to fetch orders");
            } finally {
                setLoading(false);
            }
        };

        fetchOrders();
    }, [token]);

    if (loading) return <p>Loading orders...</p>;
    if (error) return <p className="text-danger">{error}</p>;

    return (
        <div>
            <h2 className={`${Style["bg-danger"]}`}>Orders List</h2>
            {orders.length === 0 ? (
                <p>No orders found.</p>
            ) : (
                <ul>
                    {orders.map((order) => (
                        <li key={order._id}>
                            <p>Order ID: {order._id}</p>
                            <p>Total Price: ${order.totalPrice}</p>
                            <p>Status: {order.status}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
