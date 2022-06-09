import StepsHeader from './StepsHeader';
import ProductsList from './ProductsList';
import './styles.css';
import { useEffect, useState} from 'react';
import { fecthProducts } from '../api';
import { Product } from './types';

function Orders(){
  const [products,setProducts] = useState<Product[]>([]);
  console.log(products);



   useEffect(() => {
      fecthProducts()
     .then(response => setProducts(response.data))
     .catch(error => console.log(EvalError))
   }, []);
    return (

       <div className= "orders-conteiner">
     <StepsHeader />
     <ProductsList  products={products}/>
       </div>
    )
}
export default Orders;