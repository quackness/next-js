import AddToCart from "./AddToCart";
import styles from './ProductCard.module.css';



function ProductCard() {
  return (
    <div className={styles.card}>
  <AddToCart />
    </div>
  )
}

export default ProductCard