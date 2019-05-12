import React, { Component } from 'react';
import './wishlist.css';
import ProductCondensed from '../Product-condensed/product-condensed';
import NotificationService, { NOTIF_WISHLIST_CHANGED } from '../Services/notification-service';


let ns = new NotificationService();

class WishList extends Component {

    constructor(props) {
        super(props);

        this.state = { wishList: [] };
        //Bind functions
        this.createWishList = this.createWishList.bind(this);
        this.onWishListChanged = this.onWishListChanged.bind(this);
    }

    componentDidMount() {
        ns.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishListChanged);
    }

    componentWillUnmount() {
        ns.removeObserver(this, NOTIF_WISHLIST_CHANGED);
    }

    onWishListChanged(newWishList) {
        this.setState({ wishList: newWishList });
    }

    createWishList = () => {
        const list = this.state.wishList.map((product) =>
            <ProductCondensed product={product} key={product._id} />
        );
        return (list);
    }

    render() {
        
        var btnClass;
        if (this.state.wishList.length === 0) {
            btnClass = "card-block wishl";
        } else {
            btnClass = "card-block wishl2";
        }

        return (
            <div className="card" >
                <div className={btnClass}>
                    <h4 className="wishlist-title">Wish List</h4>
                    <ul className="list-group">
                        {this.createWishList()}
                    </ul>
                </div>
            </div>
        );
    }
}

export default WishList;