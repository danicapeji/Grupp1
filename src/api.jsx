const API_BASE_URL = "https://fakestoreapi.com";

export const fetchProducts = async () => {
  const response = await fetch(`${API_BASE_URL}/products`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_BASE_URL}/products/categories`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchProductById = async (id) => {
  const response = await fetch(`${API_BASE_URL}/products/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const fetchCategoriesWithImages = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return categories.map((category) => {
    const product = products.find((p) => p.category === category);
    return {
      name: category,
      imageUrl: product ? product.image : "default_image_url.jpg",
    };
  });
};
