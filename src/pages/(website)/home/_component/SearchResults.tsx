import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";

interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: {
    name: string;
  };
  discount?: number;
}

const SearchPage: React.FC = () => {
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sort, setSort] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const query = new URLSearchParams(useLocation().search).get("query") || "";

  useEffect(() => {
    const fetchResults = async () => {
      if (query.trim() === "") {
        setResults([]);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(
          "http://localhost:8080/api/v1/search",
          {
            params: { searchTerm: query, sort },
          }
        );
        setResults(response.data);
      } catch (err) {
        setError("Sản phẩm bạn tìm không tồn tại!");
        console.error("Search error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [query, sort]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSort(event.target.value);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Kết quả tìm kiếm cho: "{query}"
        </h1>
        <div className="mb-6 flex items-center space-x-2">
          <label htmlFor="sort" className="text-gray-700 font-medium">
            Bộ lọc:
          </label>
          <div className="relative">
            <select
              id="sort"
              value={sort}
              onChange={handleSortChange}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Mặc định</option>
              <option value="asc">Giá: Thấp đến cao</option>
              <option value="desc">Giá: Cao đến thấp</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 10l5 5 5-5H7z" />
              </svg>
            </div>
          </div>
        </div>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {results.length === 0 && !loading && !error && (
          <p className="text-gray-500">No products found.</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {results.map((product) => (
            <div
              key={product._id}
              className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                onClick={() => {
                  setSelectedImage(product.image);
                  setIsModalOpen(true);
                }}
              />
              {product.discount && (
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}%
                </span>
              )}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50">
                <Link
                  to={`/detail/${product._id}`}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-2 hover:bg-blue-600"
                >
                  Xem chi tiết
                </Link>
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                  <Link
                    to={`/detail/${product._id}`}
                    className="text-gray-900 hover:underline"
                  >
                    {product.name}
                  </Link>
                </h2>
                <p className="text-gray-700">{product.category.name}</p>
                <p className="text-gray-900 font-bold mt-2">
                  {product.discount ? (
                    <>
                      <span className="line-through text-red-500">
                        {product.price.toLocaleString()}$
                      </span>
                      <span className="text-green-500 ml-2">
                        {(
                          product.price -
                          (product.price * product.discount) / 100
                        ).toLocaleString()}{" "}
                        $
                      </span>
                    </>
                  ) : (
                    `${product.price.toLocaleString()} $`
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <img
              src={selectedImage || ""}
              alt="Product"
              className="max-w-full"
            />
            <button
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPage;
