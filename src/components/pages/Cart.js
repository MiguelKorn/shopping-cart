import React from 'react';
import {connect} from 'react-redux';
import {Panel, Col, Row, Well, Button, ButtonGroup, Label, Modal} from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import {deleteCartItem, updateCart} from "../../actions/cartActions";

class Cart extends React.Component {
    constructor() {
        super();

        this.state = {
            showModal: false
        }
    }
    renderCart() {
        const cartItemList = this.props.cart.map(cartArray => {
            const id = cartArray._id;
            return (
                <Panel key={id}>
                    <Row>
                        <Col xs={12} sm={4}>
                            <h6>{cartArray.title}</h6><span>    </span>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>€ {cartArray.price}</h6>
                        </Col>
                        <Col xs={12} sm={2}>
                            <h6>qty. <Label bsStyle="success">{cartArray.quantity}</Label></h6>
                        </Col>
                        <Col xs={6} sm={4}>
                            <ButtonGroup style={{minWidth:'300px'}}>
                                <Button onClick={this.onDecrement.bind(this, id, cartArray.quantity)} bsStyle="default" bsSize="small">-</Button>
                                <Button onClick={this.onIncrement.bind(this, id)} bsStyle="default" bsSize="small">+</Button>
                                <span>     </span>
                                <Button onClick={this.onDelete.bind(this, id)} bsStyle="danger" bsSize="small">Delete</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                </Panel>
            )
        });
        return (
            <Panel header="Cart" bsStyle="primary">
                {cartItemList}
                <Row>
                    <Col xs={12}>
                        <h6>Total amount: € {this.props.totalAmount}</h6>
                        <Button onClick={()=>this.openModal()} bsStyle="success" bsSize="small">PROCEED TO CHECKOUT</Button>
                    </Col>
                </Row>
                <Modal show={this.state.showModal} onHide={()=>this.closeModal()}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thank you!</Modal.Title>
                        <Modal.Body>
                            <h6>Your order has been saved!</h6>
                            <p>You will receive an email confirmation soon!</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Col xs={6}>
                                <h6>Total: € {this.props.totalAmount}</h6>
                            </Col>
                            <Button onClick={()=>this.closeModal()}>Close</Button>
                        </Modal.Footer>
                    </Modal.Header>
                </Modal>
            </Panel>
        )
    }

    renderEmpty() {
        return (<div> </div>)
    }

    onDelete(_id) {
        const currentCart = this.props.cart;
        const indexToDelete = currentCart.findIndex(cart => cart._id === _id);
        let cartAfterDelete = [...currentCart.slice(0, indexToDelete), ...currentCart.slice(indexToDelete + 1)];

        this.props.deleteCartItem(cartAfterDelete);
    }

    onIncrement(_id) {
        this.props.updateCart(_id, 1);
    }

    onDecrement(_id, quantity) {
        if(quantity > 1) {
            this.props.updateCart(_id, -1);
        }
    }

    openModal() {
        this.setState({showModal: true});
    }

    closeModal() {
        this.setState({showModal: false});
    }


    render() {
        if (this.props.cart[0]) {
            return this.renderCart()
        } else {
            return this.renderEmpty()
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart.cart,
        totalAmount: state.cart.totalAmount
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({deleteCartItem, updateCart}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);