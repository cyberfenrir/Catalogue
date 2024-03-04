import React, { useState } from 'react';
import axios from 'axios';
import { Card, Form, Input, Button, message, Select } from 'antd';
import AdminHeader from '../components/AdminHeader';

const { Option } = Select;

const AddProduct = () => {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      await axios.post('http://localhost:8000/api/catalogue/add', values);
      message.success('Product added successfully');
      form.resetFields();
    } catch (error) {
      console.error('Error adding product:', error);
      message.error('Failed to add product');
    }
  };

  return (
    <div>
      <AdminHeader />
      <Card title="Add Product" style={{ width: 600, margin: 'auto', marginTop: 50 }}>
        <Form
          form={form}
          onFinish={handleSubmit}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
        >
          <Form.Item
            label="Item Code"
            name="itemcode"
            rules={[{ required: true, message: 'Please enter item code' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Image Link"
            name="imagelink"
            rules={[{ required: true, message: 'Please enter image link' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Item Name"
            name="itemname"
            rules={[{ required: true, message: 'Please enter item name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Details"
            name="details"
          >
            <Input.TextArea />
          </Form.Item>

          <Form.Item
            label="1 Month Price"
            name="one_month_price"
            rules={[{ type: 'number', required: true, message: 'Please enter 1 month price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="2 Month Price"
            name="two_month_price"
            rules={[{ type: 'number', required: true, message: 'Please enter 2 month price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="3 Month Price"
            name="three_month_price"
            rules={[{ type: 'number', required: true, message: 'Please enter 3 month price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="6 Month Price"
            name="six_month_price"
            rules={[{ type: 'number', required: true, message: 'Please enter 6 month price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="9 Month Price"
            name="nine_month_price"
            rules={[{ type: 'number', required: true, message: 'Please enter 9 month price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="12 Month Price"
            name="twelve_month_price"
            rules={[{ type: 'number', required: true, message: 'Please enter 12 month price' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: 'Please specify the status' }]}
          >
            <Select>
              <Option value="In Stock">In Stock</Option>
              <Option value="Out of Stock">Out of Stock</Option>
            </Select>
          </Form.Item>

          
          <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Add Product
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AddProduct;
