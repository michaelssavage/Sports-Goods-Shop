import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Products.module.css";
import { randomID } from "src/utils/randomID";

const generateBenefits = (description) => {
  const items = description.split("\n- ");
  if (items.length == 1) return description;
  return (
    <>
      <p>{items[0]}</p>
      <ol>
        {items.slice(1).map((item) => {
          return <li key={randomID()}>{item}</li>;
        })}
      </ol>
    </>
  );
};

export const Products = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div key={product.productId} className="col">
              <div className={styles.card}>
                <img
                  src={product.productImage}
                  alt={`product image for item ${index}`}
                />
                <div className={styles.cardBody}>
                  <p className={styles.name}>{product.productName}</p>
                  <div className={styles.description}>
                    {generateBenefits(product.productDescription)}
                  </div>
                  <p className={styles.price}>€{product.price}</p>
                  <Link to={`/view/${product.productId}`}>
                    <button className={styles.button}>Open</button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      productId: PropTypes.number,
      productName: PropTypes.string,
      productDescription: PropTypes.string,
      productImage: PropTypes.string,
      price: PropTypes.number,
    })
  ),
};
