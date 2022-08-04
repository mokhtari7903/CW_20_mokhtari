import { Container, Form, Row } from "react-bootstrap";

function Services() {
  return (
    <Container>
      <Form style={{ width: "250px", padding: "25px" }}>
        <Row>
          <Form.Check type="switch" id="custom-switch" label="bills" />
        </Row>
        <Row>
          <Form.Check type="switch" label="credits" id="disabled-custom-switch" />
        </Row>
      </Form>
    </Container>
  );
}

export default Services;
