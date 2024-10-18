import Product from "./Product";

function ListProducts(props) {
  return (
    <>
      <section className="ListProducts">
        {props.products.map((product) => (
          <Product key={props.id} data={product} addProduct={props.addProduct}></Product>
          // We use the ID of each product as a Key for each item
          // The list just pass the function addProduct() that comes from the App,jsx
          // data={product} --> In order to avoid the function addProduct() be included in the return
          // data is how the product is showed in the props / Developer tools / Components
        ))}
      </section>
    </>
  );
}

export default ListProducts;
