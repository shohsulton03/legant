import { request } from "@/api";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CreateProduct = () => {
  const token = useSelector((state) => state.token.value);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await request.get("/product-category/get");
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCreateProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);

    // Convert numeric fields to numbers
    product.price = +product.price;
    product.categoryId = +product.categoryId;
    product.stock = +product.stock;
    product.average_rating = 0;

    try {
      await request.post("/product/create", product, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Product created successfully!");
      e.target.reset();
    } catch (error) {
      console.error("Error creating product:", error);
      alert("Failed to create product. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-6 bg-gray-50 shadow-lg rounded-xl">
      <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
        Create New Product
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading categories...</p>
      ) : (
        <form onSubmit={handleCreateProduct} className="space-y-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              placeholder="Write a short description..."
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              rows="4"
              required
            ></textarea>
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter product price"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter image URL"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Category
            </label>
            <select
              name="categoryId"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            >
              <option value="" disabled selected>
                Select a category
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          {/* Stock */}
          <div>
            <label className="block text-sm font-semibold text-gray-700">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              placeholder="Enter stock quantity"
              className="mt-2 block w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 p-3"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
            >
              Create Product
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CreateProduct;
