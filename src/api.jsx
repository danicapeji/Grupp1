const API_BASE_URL = 'https://fakestoreapi.com';

// Helper function to fetch data
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network response was not ok: ${response.statusText}`);
  }
  return response.json();
};

// Fetch products
export const fetchProducts = async () => {
  return fetchData(`${API_BASE_URL}/products`);
};

// Fetch categories
export const fetchCategories = async () => {
  return fetchData(`${API_BASE_URL}/products/categories`);
};

// Fetch a product by ID
export const fetchProductById = async (id) => {
  return fetchData(`${API_BASE_URL}/products/${id}`);
};

// Fetch categories with images
export const fetchCategoriesWithImages = async () => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return categories.map(category => {
    const product = products.find(p => p.category === category);
    return {
      name: category,
      imageUrl: product ? product.image : 'https://via.placeholder.com/150' // Default image URL
    };
  });
};
