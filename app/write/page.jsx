"use client";

import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';


export default function page() {
  const [formData, setFormData] = useState({
    id: '',
    little_title: '',
    title: '',
    description: '',
    image_url: '',
    category: '',
    date: '',
    additional_info: '',
    additional_info_2: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with formData, like sending it to an API
    console.log(formData);
    // Reset form after submission
    setFormData({
      id: '',
      little_title: '',
      title: '',
      description: '',
      image_url: '',
      category: '',
      date: '',
      additional_info: '',
      additional_info_2: ''
    });
  };
  return (
    <Container>
    <Row className="justify-content-md-center mt-5">
      <Col md={8}>
        <h1 className="mb-4">Enter Data</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formId">
            <Form.Label>ID</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter ID" 
              name="id" 
              value={formData.id} 
              onChange={handleChange} 
            />
          </Form.Group>

          <Form.Group controlId="formLittleTitle">
            <Form.Label>Little Title</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter Little Title" 
              name="little_title" 
              value={formData.little_title} 
              onChange={handleChange} 
            />
          </Form.Group>

          {/* Repeat Form.Group for other fields */}

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}
