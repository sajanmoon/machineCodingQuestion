import React, { useEffect, useState } from "react";

const Pagination = () => {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1);

  const fetchProducts = async () => {
    const data = await fetch("https://dummyjson.com/products?limit=100");
    const json = await data.json();
    setProduct(json.products);
    console.log(json.products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const selectedPageHandler = (selectedPage) => {
    setPage(selectedPage);
  };

  return (
    <div>
      <div className="flex flex-wrap">
        {product.slice(page * 10 - 10, page * 10).map((elem) => (
          <div
            className="border border-black m-4 rounded-lg bg-gray-100"
            key={elem.id}
          >
            <img className="p-4 h-52" src={elem.thumbnail} alt="" />
            <h1>{elem.title}</h1>
            <h1>{elem.id}</h1>
          </div>
        ))}
      </div>

      {product.length > 0 && (
        <div className="flex justify-center mt-4">
          <div className="pagination">
            <span
              className=" border border-black p-2 m-2 cursor-pointer"
              onClick={() => selectedPageHandler(page - 1)}
            >
              ⏮️
            </span>
            {[...Array(product.length / 10)].map((_, i) => (
              <span
                onClick={() => selectedPageHandler(i + 1)}
                className={`border border-black p-2 m-2 cursor-pointer ${
                  page === i + 1 ? "bg-gray-400" : ""
                }`}
                key={i}
              >
                {i + 1}
              </span>
            ))}
            <span
              className=" border border-black p-2 m-2 cursor-pointer"
              onClick={() => selectedPageHandler(page + 1)}
            >
              ⏭️
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pagination;
