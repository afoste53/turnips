import { useState } from "react";
import StockGraphComponent from "./StockGraphComponent";
import { Container, Row, Col, Button, Modal } from "react-bootstrap";

const StockTickerComponent = (props) => {
  const prices = [90, 95, 100, 150, 90, 95];

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
  };

  // Handler for showing modal for indicating that user had sold their turnips
  const showSoldHandler = () => {
    setShowSold(true);
  };

  // Handler for hiding modal for indicating that user had sold their turnips
  const hideSoldHandler = () => {
    setShowSold(false);
  };

  return (
    <>
      <Container>
        <Row className="my-5">
          <StockGraphComponent prices={prices} />
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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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
      <Modal show={showSold} onHide={hideSoldHandler}></Modal>
    </>
  );
};

export default StockTickerComponent;
