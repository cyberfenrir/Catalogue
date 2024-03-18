import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import { Button } from 'antd';
import ProductCard from '../components/ProductCard';
import '../pages/Products.css'

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://cataloguebackend.onrender.com/api/catalogue/all'); 
        // const response = await axios.get('http://cataloguebackend.onrender.com/api/catalogue/add'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  console.log("product list:", products);

  return (
    <div>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Product Catalogue</h1>
        <Button className="disclaimer-button">I Agree (Disclaimer)</Button>
      </header>
      <Row gutter={[16, 16]}>
        {products.map((product, index) => (
          <Col span={8} key={index}>
            <ProductCard item={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductPage;
