import React from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router";
interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const ProductPrice: React.FC<IProps> = ({ onChange }) => {
  const navigate = useNavigate();
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        navigate("/products");
      }}
    >
      <Form.Group className="mb-3">
        <Form.Label>price</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ProductPrice;
