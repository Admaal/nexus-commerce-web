export const PRODUCT_IMAGES = {
  teclado: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=85",
  monitor: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=85",
  auriculares: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=85",
  ratón: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=85",
  laptop: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=85",
  silla: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=800&q=85",
  webcam: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da?w=800&q=85",
  cable: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=85",
  hub: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=800&q=85",
  soporte: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=85",
  escritorio: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=85",
  default: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=85",
};

export const ORDER_STATUS = {
  PENDING: "PENDING",
  PROCESSING: "PROCESSING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
};

export const getProductImage = (name = "") => {
  const lower = name.toLowerCase();
  for (const [key, url] of Object.entries(PRODUCT_IMAGES)) {
    if (key !== "default" && lower.includes(key)) return url;
  }
  return PRODUCT_IMAGES.default;
};
