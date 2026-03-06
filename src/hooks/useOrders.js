import { useCallback, useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import { useAuth } from "../contexts/AuthContext";

export function useOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const isMounted = useRef(true);
  const { user } = useAuth();

  const fetchOrders = useCallback(async () => {
    if (!user) return;

    const { data, error } = await supabase
      .from("orders")
      .select("*")
      .order("created_at", { ascending: false });

    if (data && isMounted.current) setOrders(data);
    if (error) console.error(error);
  }, [user]);

  useEffect(() => {
    isMounted.current = true;

    if (user) {
      // eslint-disable-next-line
      fetchOrders();

      const channel = supabase
        .channel("public:orders")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "orders" },
          () => fetchOrders()
        )
        .subscribe();

      return () => {
        isMounted.current = false;
        supabase.removeChannel(channel);
      };
    }

    return () => {
      isMounted.current = false;
    };
  }, [user, fetchOrders]);

  const createOrder = useCallback(async (items, customerInfo) => {
    if (!user) return { error: { message: "Usuario no autenticado" } };
    if (!items || items.length === 0) return { error: { message: "El carrito está vacío" } };

    setLoading(true);

    const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    const orderItems = items.map((item) => ({
      product_id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const insert = {
      customer_email: customerInfo.email,
      customer_name: customerInfo.name,
      shipping_address: customerInfo.address,
      items: orderItems,
      total: total,
      user_id: user.id 
    };

    const { error } = await supabase.from("orders").insert(insert);

    if (!error) {
       await fetchOrders();
    }

    setLoading(false);
    return { error };
  }, [user, fetchOrders]);

  return { orders, loading, fetchOrders, createOrder };
}