import React, { useEffect ,useState} from 'react'

import {Col,Row} from 'react'
//import { Product } from '../components/Product.js'
import Product from '../components/Product'
import products as pp from '../products.js'

const HomeScreen = () => {
   const [products, setProducts] = useState([]) ;            
  useEffect(() => {
    console.log("abdur rakib");
    setProducts(pp);
     console.log(products.name);
   
  }, [products])
  
  return (
   
    <>
    <h1>latest product</h1>
    <Row>
     
    {
     
     products.map((product,index)=>
     (
        <Col id={index} sm={12} md={6} lg={4} xl={3}>
         <h2>{product.name}</h2>
        </Col>
     )
     )
    } 
  
 </Row>
   
    </>
    
    
    
    
  )
}

export default HomeScreen