import { useState } from "react";
import StockGraphComponent from "./StockGraphComponent";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  InputGroup,
  FormControl,
} from "react-bootstrap";

const StockTickerComponent = (props) => {
  const [timeSelected, setTimeSelected] = useState(false);

  const prices = [90, 95, 100, 150, 90, 95];

  const labels = [
    "Sunday",
    "Mon AM",
    "Mon PM",
    "Tues AM",
    "Tues PM",
    "Wed AM",
    "Wed PM",
    "Thurs AM",
    "Thurs PM",
    "Fri AM",
    "Fri PM",
    "Sat Am",
    "Sat PM",
  ];

  // State variables for whether or not to show modals for adding a point or indicating that you've already sold
  const [showAdd, setShowAdd] = useState(false);
  const [showSold, setShowSold] = useState(false);

  // Handler for showing modal for adding a point
  const showAddHandler = () => {
    setShowAdd(true);
  };
  // Handler for hiding modal for adding a point
  const hideShowHandler = () => {
    setShowAdd(false);
    setTimeSelected(false);
  };

  // Handler for showing modal for indicating that user had sold their turnips
  const showSoldHandler = () => {
    setShowSold(true);
  };

  // Handler for hiding modal for indicating that user had sold their turnips
  const hideSoldHandler = () => {
    setShowSold(false);
  };

  // Handler for selecting the date a user would like to add
  const selectDayHandler = () => {
    setTimeSelected(true);
  };

  return (
    <>
      <Container>
        <Row className="my-5">
          <StockGraphComponent prices={prices} labels={labels} />
        </Row>
        <Row className="d-flex justify-content-center my-3">
          <Col className="d-flex justify-content-end">
            <Button onClick={showAddHandler}>Add New Price</Button>
          </Col>
          <Col className="d-flex justify-content-start">
            <Button onClick={showSoldHandler}>I Cashed Out</Button>
          </Col>
        </Row>
      </Container>

      {/** modal for adding a new data point*/}
      <Modal show={showAdd} onHide={hideShowHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Add A New Offered Turnip Price?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>When was the price offered?</Form.Label>
              <Form.Control onChange={selectDayHandler} as="select">
                <option value="" selected></option>
                {labels.map((o) => (
                  <option>{o}</option>
                ))}
                ;
              </Form.Control>
            </Form.Group>
            <br />
            {timeSelected && (
              <Form.Group>
                <Form.Label>What price was offered?</Form.Label>
                <br />
                <InputGroup className="mb-3">
                  <FormControl type="int" placeholder="" />
                </InputGroup>
              </Form.Group>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideShowHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={hideShowHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal for indicating user has sold their turnips*/}
      <Modal show={showSold} onHide={hideSoldHandler}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideSoldHandler}>
            Close
          </Button>
          <Button variant="primary" onClick={hideSoldHandler}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default StockTickerComponent;
