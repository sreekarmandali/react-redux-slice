import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getRequestData, sendRequestData } from './Store/Item-Slice';


function App() {


  const cartitems = useSelector(state => state.item)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  useEffect(() =>  {
    
    dispatch(sendRequestData(cartitems))

  }, [cartitems,dispatch ])

  useEffect(() =>  {
    
    dispatch(getRequestData())

  }, [dispatch])
  const totalQuantity = useSelector(state => state.item.totalQuantity)
  return (
    <Layout>
      {totalQuantity && cart.cartInvisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
