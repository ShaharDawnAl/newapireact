import React, { Component } from 'react';
import './product-condensed.css';
import DataService from '../Services/data-service';

let ds = new DataService();
class ProductCondensed extends Component {

    constructor(props) {
        super(props);
        this.removeProduct = this.removeProduct.bind(this);
    }

    removeProduct = () => {
        ds.removeWishListItem(this.props.product);
        
    }

    render() {
        
        return (
                <li className="group-item">
                    <button onClick={() => this.removeProduct()} className="close closeIt">
                        <i className="">&times;</i>
                    </button>
                    <p className="ajustList" >{this.props.product.title} | <b>${this.props.product.price}</b></p>

                </li>
        );
    }
}

export default ProductCondensed;