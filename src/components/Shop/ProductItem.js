import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useDispatch } from 'react-redux';
import itemSlice from '../../Store/Item-Slice';
const ProductItem = (props) => {
  const {id, title, price, description } = props;
  const dispatch = useDispatch()
  const addToCartItemHandler = (event) => {
    event.preventDefault()
    dispatch(itemSlice.actions.addItem({id, title, price, description }))
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
