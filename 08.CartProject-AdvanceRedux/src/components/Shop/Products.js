import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS_ITEMS = [
  {
    id: "p1",
    title: "Book 1 - Rework",
    description: "Book which will change the definition about the work",
    price: 6.0,
  },
  {
    id: "p2",
    title: "Book 2 - Rich Dad Poor Dad",
    description: "Book about finance literacy",
    price: 9.0,
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS_ITEMS.map((item) => {
          return (
            <ProductItem
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              description={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
