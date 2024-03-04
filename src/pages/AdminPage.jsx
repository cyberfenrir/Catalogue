import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Modal, Button, Input, Form, Card, message } from 'antd';
import AdminHeader from '../components/AdminHeader';
import "antd/dist/reset.css";

const { TextArea } = Input;

const AdminPage = () => {
  const [data, setData] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/catalogue/all');
      setData(response.data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (item) => {
    setEditingItem(item);
    setIsModalVisible(true);
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(`http://localhost:8000/api/catalogue/update/${editingItem.itemcode}`, editingItem);
      console.log('Update response:', response.data);
      fetchData();
      setIsModalVisible(false);
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  const handleDelete = async (itemcode) => {
    try {
      await axios.delete(`http://localhost:8000/api/catalogue/delete/${itemcode}`);
      fetchData();
      message.success('Item deleted successfully');
    } catch (error) {
      console.error('Error deleting item:', error);
      message.error('Failed to delete item');
    }
  };

  const columns = [
    {
      title: 'Item Code',
      dataIndex: 'itemcode',
      key: 'itemcode',
      editable: false,
    },
    {
      title: 'Image Link',
      dataIndex: 'imagelink',
      key: 'imagelink',
    },
    {
      title: 'Item Name',
      dataIndex: 'itemname',
      key: 'itemname',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <div>
          <Button type="primary" onClick={() => handleEdit(record)} style={{ marginRight: '8px' }}>
            Edit
          </Button>
          <Button type="danger" onClick={() => handleDelete(record.itemcode)}>
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AdminHeader /> 
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Admin Page</h1>
      </div>
      <Card style={{ margin: '20px' }}>
        <Table
          dataSource={data}
          columns={columns}
          pagination={{ pageSize: 5 }}
        />
      </Card>
      <Modal
        title="Edit Item"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={[
          <Button key="cancel" onClick={() => setIsModalVisible(false)}>
            Cancel
          </Button>,
          <Button key="update" type="primary" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
      >
        <Form>
          {Object.keys(editingItem || {}).map((key) => (
            editingItem && !['_id', 'itemcode', '__v'].includes(key) && (
              <Form.Item key={key} label={key}>
                <Input
                  value={editingItem[key]}
                  onChange={(e) => setEditingItem({ ...editingItem, [key]: e.target.value })}
                />
              </Form.Item>
            )
          ))}
        </Form>
      </Modal>
    </div>
  );
};

export default AdminPage;
