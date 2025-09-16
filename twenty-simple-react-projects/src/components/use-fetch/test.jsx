import UseFetch from "./index.jsx";

export default function UseFetchHookTest() {
  const { data, errorMessage, pending } = UseFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );
  return (
    <div>
      <h1>Use Fetch Hook</h1>
      {errorMessage ? <h3>{errorMessage}</h3> : null}
      {pending ? <h3>Pending ! Please Wait</h3> : null}
      {data && data.products && data.products.length
        ? data.products.map((dataItem) => (
            <p key={dataItem.key}>{dataItem.title}</p>
          ))
        : null}
    </div>
  );
}
