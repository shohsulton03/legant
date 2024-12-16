import { useFetch } from "@/hooks/useFetch";
import React from "react";

const Categories = () => {
  const { data, error, loading } = useFetch("/product-category/get");

  if (loading)
    return <div className="text-center py-20">Loading categories...</div>;
  if (error)
    return (
      <div className="text-center py-20 text-red-500">
        Failed to load categories. Please try again later.
      </div>
    );

  if (!data || data.length === 0) {
    return <div className="text-center py-20">No categories available.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center py-10">
        Shop by Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center text-center gap-4"
          >
            <img
              className="w-40 h-40 bg-slate-300 rounded-full object-cover"
              src={category.image || "https://via.placeholder.com/150"}
              alt={category.name || "Category"}
            />

            <h3 className="text-lg font-semibold">
              {category.name || "Unnamed Category"}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
