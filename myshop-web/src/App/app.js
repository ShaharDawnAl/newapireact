import React, { Component } from 'react';
//import logo from './logo.svg';
import logo from './images.png';
import './app.css';
import HttpService from '../Services/http-service';
import Product from '../Product/product';
import WishList from '../Wishlist/wishlist';
import Footer from '../Footer/footer';
//import Header from '../Header/header';
import Header2 from '../Header2/header2';


const http = new HttpService();

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { products: [] };

    this.loadData = this.loadData.bind(this);
    this.productList = this.productList.bind(this);
    this.loadData();

  }

  loadData = () => {
    var items = this;
    http.getProducts().then((productsData) => {
      items.setState({ products: productsData });
      console.log(productsData);
    }, (err) => {
      console.log(err);
    });
  }

  productList = () => {
    const list = this.state.products.map((product) =>
      <div className="col-sm-3" key={product._id}>
        <Product product={product} />
      </div>
    );
    return (list);
  }

  render() {
    return (
      <React.Fragment>
      
        <div className="App" >
        
          <Header2 />
          <header className="App-header">
      
            <img src={logo} className="App-logo" alt="logo" />
            <h2>
              THE BEST SHOP AROUND
          </h2>
            
          </header>
          

          <div className="container-fluid App-main">

            <h1 className="prods">Products</h1>
            <div className="row">
              <div className="col-sm-9">
                <div className="row" id="products_list">
                  {this.productList()}
                </div>
              </div>
              <div className="col-sm-3">
                <WishList />
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
