import { Col, Form, Row, Stack } from "react-bootstrap";

export function NewNote() {
  return (
    <div>
      <Form>
        hi
        <Stack gap={4}>
          <Row>
            <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control required />
            </Form.Group>
            </Col>
          </Row>
        </Stack>
      </Form>
    </div>
  )
}