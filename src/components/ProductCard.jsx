import React, { useState } from 'react';
import { Card, Select } from 'antd';

const { Option } = Select;

const ProductCard = ({ item }) => {
  const [selectedPriceKey, setSelectedPriceKey] = useState(`3 Months - Rs. ${item.three_month_price}`);

  const handlePriceChange = (value) => {
    setSelectedPriceKey(value);
  };

  const getPriceByKey = (key) => {
    switch (key) {
      // case 'one_month_price':
      //   return item.one_month_price;
      // case 'two_month_price':
      //   return item.two_month_price;
      case 'three_month_price':
        return item.three_month_price;
      case 'six_month_price':
        return item.six_month_price;
      case 'nine_month_price':
        return item.nine_month_price;
      case 'twelve_month_price':
        return item.twelve_month_price;
      default:
        return item.three_month_price;
    }
  };

  return (
    <Card
      style={{ width: 300, marginTop: 16 }}
      cover={<img alt="product" src={item.imagelink} />}
    >
      <Card.Meta
        title={<strong>{item.itemname}</strong>}
        description={item.description}
      />
      <div style={{ marginTop: 16 }}>
        <Select value={selectedPriceKey} onChange={handlePriceChange}>
          {/* <Option value="one_month_price">1 Month - Rs. {item.one_month_price}</Option>
          <Option value="two_month_price">2 Months - Rs. {item.two_month_price}</Option> */}
          <Option value="three_month_price">3 Months - Rs. {item.three_month_price}</Option>
          <Option value="six_month_price">6 Months - Rs. {item.six_month_price}</Option>
          <Option value="nine_month_price">9 Months - Rs. {item.nine_month_price}</Option>
          <Option value="twelve_month_price">11 Months - Rs. {item.twelve_month_price}</Option>
        </Select>
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Selected Price:</strong> Rs. {getPriceByKey(selectedPriceKey)}
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Description: </strong> {item.description}
      </div>
      <div style={{ marginTop: 16 }}>
        <strong>Status: </strong> {item.status}
      </div>
    </Card>
  );
};

export default ProductCard;
