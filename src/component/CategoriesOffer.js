import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CategoriesOffer() {
  return (
    <Container className="pt-5 pb-5">
      <Row>
        <Col>
          <Carousel className="categories-offer">
            <Carousel.Item>
              <img
                src={require("../images/offers/deal-offer.jpg")}
                alt="offer"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../images/offers/supplement-offer1.jpg")}
                alt="offer"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={require("../images/offers/offer2.jpg")}
                alt="offer"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
}

export default CategoriesOffer;
