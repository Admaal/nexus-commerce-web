import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase.from("products").select("*");
      if (error) setError(error.message);
      else setProducts(data ?? []);
      setLoading(false);
    }
    load();
  }, []);

  return { products, loading, error };
}
