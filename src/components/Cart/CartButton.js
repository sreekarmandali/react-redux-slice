import { useDispatch, useSelector } from 'react-redux';
import cartSlice  from '../../Store/Cart-Slice';
import classes from './CartButton.module.css';


const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector(state => state.item.totalQuantity)
  const showCart = (event) => {
    event.preventDefault()
    dispatch(cartSlice.actions.toggle())
  }
  return (
    <button className={classes.button}  onClick= {showCart}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
