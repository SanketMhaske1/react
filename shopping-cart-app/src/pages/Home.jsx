import React, { useEffect, useState } from "react";
import { MoonLoader } from "react-spinners";
import ProductTile from "../components/Header/product-tile";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setEerrorMessage] = useState(null);

  async function fetchListOfProducts() {
    try {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      if (data) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setEerrorMessage(error.message);
      console.log("Fail To fetch Data", error.message);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  if (errorMessage !== null)
    return (
      <div className="min-h-screen w-full flex justify-center items-center">
        <h1>Error...{errorMessage}</h1>
      </div>
    );

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <MoonLoader size={"30"} color="rgb(127,29,29)" />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3">
          {products && products.length > 0
            ? products.map((product) => (
                <ProductTile key={product.id} product={product} />
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
