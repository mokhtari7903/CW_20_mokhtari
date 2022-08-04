import React from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductPhoto: React.FC<IProps> = ({ onChange }) => {
  const navigate = useNavigate();
  return (
    <Form>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>select image</Form.Label>
        <Form.Control type="file" onChange={onChange} name="photo" />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={() => navigate("/addproduct/addprice")}
      >
        Next
      </Button>
    </Form>
  );
};

export default ProductPhoto;
