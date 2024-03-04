import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'antd';
import ProductCard from '../components/ProductCard';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/catalogue/all'); 
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
      <h1>Product Catalogue</h1>
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
