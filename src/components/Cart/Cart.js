import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
const cartItems = useSelector(state => state.item.items)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(itemData => <CartItem key={itemData.id} item={itemData}></CartItem>)}
      </ul>
    </Card>
  );
};

export default Cart;
