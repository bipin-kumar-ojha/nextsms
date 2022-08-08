import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function Categories() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="sectionTitle mb-5">
              <h4>Fruits Categories</h4>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="categories-box">
              <img
                src={require("../images/categories/cuts-sprouts.jpg")}
                alt="First slide"
              />
            </div>
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="categories-box">
                  <img
                    src={require("../images/categories/exotic-fruits.jpg")}
                    alt="First slide"
                  />
                </div>
              </Col>
              <Col>
                <div className="categories-box">
                  <img
                    src={require("../images/categories/fresh-fruits.jpg")}
                    alt="First slide"
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="categories-box">
                  <img
                    src={require("../images/categories/fresh-vegetables.jpg")}
                    alt="First slide"
                  />
                </div>
              </Col>
              <Col>
                <div className="categories-box">
                  <img
                    src={require("../images/categories/organic-fruits.jpg")}
                    alt="First slide"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Categories;
