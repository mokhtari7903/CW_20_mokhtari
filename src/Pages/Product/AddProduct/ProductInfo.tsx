import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductInfo: React.FC<IProps> = ({ onChange }) => {
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>name</Form.Label>
        <Form.Control type="text" onChange={onChange} name="name" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>description</Form.Label>
        <Form.Control type="text" onChange={onChange} name="description" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() => navigate("/addproduct/addphoto")}
      >
        Next
      </Button>
    </Form>
  );
};

export default ProductInfo;
