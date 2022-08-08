import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import React from 'react';
import '../App.css';

function Product(){
    return(
        <>
            <Container>
                <Row>
                    <Col>
                        <div className='sectionTitle'>
                            <h4>My Smart Basket</h4>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-5 pb-5'>
                    <Col>
                        <div className='product-list'>
                            <div className='prodImg'>
                                <img width="150" src={require('../images/vegie/capsicum-green.jpg')} alt="vegie" />
                            </div>
                            <div className='prodDetails'>
                                <h4>Capsicum - Green (Loose)</h4>
                                <Form.Select className='choose-qty' aria-label="Default select example">
                                <option>Quantity</option>
                                <option value="500 g - Rs.25.50">500 g - Rs.25.50</option>
                                <option value="1 Kg - Rs.51">1 Kg - Rs.51</option>
                                <option value="250 g - Rs. 13">250 g - Rs. 13</option>
                                </Form.Select>
                                <p>MRP: Rs 25.50</p>
                                <p>Standard Delivery, Today 7Pm - 10Pm</p>
                                <span>Qty</span>
                                <input type="text" value={1}/>
                                <button>Add</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className='product-list'>
                            <div className='prodImg'>
                                <img width="150" src={require('../images/vegie/carrot-orange.jpg')} alt="vegie" />
                            </div>
                            <div className='prodDetails'>
                                <h4>Capsicum - Green (Loose)</h4>
                                <Form.Select className='choose-qty' aria-label="Default select example">
                                <option>Quantity</option>
                                <option value="500 g - Rs.25.50">500 g - Rs.25.50</option>
                                <option value="1 Kg - Rs.51">1 Kg - Rs.51</option>
                                <option value="250 g - Rs. 13">250 g - Rs. 13</option>
                                </Form.Select>
                                <p>MRP: Rs 25.50</p>
                                <p>Standard Delivery, Today 7Pm - 10Pm</p>
                                <span>Qty</span>
                                <input type="text" value={1}/>
                                <button>Add</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className='product-list'>
                            <div className='prodImg'>
                                <img width="150" src={require('../images/vegie/coriander-leaves.jpg')} alt="vegie" />
                            </div>
                            <div className='prodDetails'>
                                <h4>Capsicum - Green (Loose)</h4>
                                <Form.Select className='choose-qty' aria-label="Default select example">
                                <option>Quantity</option>
                                <option value="500 g - Rs.25.50">500 g - Rs.25.50</option>
                                <option value="1 Kg - Rs.51">1 Kg - Rs.51</option>
                                <option value="250 g - Rs. 13">250 g - Rs. 13</option>
                                </Form.Select>
                                <p>MRP: Rs 25.50</p>
                                <p>Standard Delivery, Today 7Pm - 10Pm</p>
                                <span>Qty</span>
                                <input type="text" value={1}/>
                                <button>Add</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className='product-list'>
                            <div className='prodImg'>
                                <img width="150" src={require('../images/vegie/fresho-cauliflower.jpg')} alt="vegie" />
                            </div>
                            <div className='prodDetails'>
                                <h4>Capsicum - Green (Loose)</h4>
                                <Form.Select className='choose-qty' aria-label="Default select example">
                                <option>Quantity</option>
                                <option value="500 g - Rs.25.50">500 g - Rs.25.50</option>
                                <option value="1 Kg - Rs.51">1 Kg - Rs.51</option>
                                <option value="250 g - Rs. 13">250 g - Rs. 13</option>
                                </Form.Select>
                                <p>MRP: Rs 25.50</p>
                                <p>Standard Delivery, Today 7Pm - 10Pm</p>
                                <span>Qty</span>
                                <input type="text" value={1}/>
                                <button>Add</button>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className='product-list'>
                            <div className='prodImg'>
                                <img width="150" src={require('../images/vegie/fresho-tomato-hybrid.jpg')} alt="vegie" />
                            </div>
                            <div className='prodDetails'>
                                <h4>Capsicum - Green (Loose)</h4>
                                <Form.Select className='choose-qty' aria-label="Default select example">
                                <option>Quantity</option>
                                <option value="500 g - Rs.25.50">500 g - Rs.25.50</option>
                                <option value="1 Kg - Rs.51">1 Kg - Rs.51</option>
                                <option value="250 g - Rs. 13">250 g - Rs. 13</option>
                                </Form.Select>
                                <p>MRP: Rs 25.50</p>
                                <p>Standard Delivery, Today 7Pm - 10Pm</p>
                                <span>Qty</span>
                                <input type="text" value={1}/>
                                <button>Add</button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Product;