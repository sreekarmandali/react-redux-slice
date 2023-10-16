import ProductItem from './ProductItem';
import classes from './Products.module.css';
const productItems = [{ id: 1, title: 'biscuits',description:"these are cripsy", price: 10 }, { id: 2, title: 'chocolate', description:"these are choclaty", price: 70 }]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productItems.map(item => <ProductItem key = {item.id} title= {item.title} price={item.price} description={item.description} id={item.id}/>
        )}
        
      </ul>
    </section>
  );
};

export default Products;
