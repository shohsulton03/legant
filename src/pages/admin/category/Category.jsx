import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Category = () => {
  // Fetch data from the API
  const { data, error, loading } = useFetch("/product-category/get");

  // Handle loading and error states
  if (loading) return <div>Loading categories...</div>;
  if (error)
    return <div>Failed to load categories. Please try again later.</div>;

  // Check if data is available
  if (!data || data.length === 0) {
    return <div>No categories available.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((category) => (
          <div
            key={category.id}
            className="p-4 border rounded shadow-sm hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold">{category.name}</h3>
            {category.description && (
              <p className="text-gray-600 mt-2">{category.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
