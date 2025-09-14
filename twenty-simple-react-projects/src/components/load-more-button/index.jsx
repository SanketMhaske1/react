import { useEffect, useState } from "react";
import "./styles.css";

function LoadMoreData() {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();
      if (data && data.products && data.products.length) {
        setProducts((prev) => [...prev, ...data.products]);
      }
      setLoading(false);
    } catch (error) {
      setError(error.message);
      console.log("Fail To fetch Product", error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) setDisableButton(true);
  }, [products]);

  if (loading) return <div>Loading data! Please Wait</div>;
  if (error !== null) return <div>{error}</div>;

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((product) => {
              return (
                <div className="product" key={product.id}>
                  <img src={product.thumbnail} alt={product.title} />
                  <p>{product.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        {disableButton ? (
          <p>You Have Reached to 100 products</p>
        ) : (
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Load More Products
          </button>
        )}
      </div>
    </div>
  );
}

export default LoadMoreData;
