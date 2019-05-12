import React, { Component } from 'react';
import './search.css';

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search_input: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.searchProduct = this.searchProduct.bind(this);
    }

    handleInputChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }
    searchProduct(e) {
        e.preventDefault();
        var search = this.state.search_input.toLowerCase();
        var products = document.querySelectorAll("#products_list .card .card-title");
        var product_parentdiv = "";
        var product_title = "";
        //var count_wrong_search = 0;
        for (var i = 0; i < products.length; i++) {
            product_parentdiv = products[i].parentElement.parentElement.parentElement;
            //console.log(products[i].parentElement.parentElement.parentElement);
            product_title = products[i].innerText.toLowerCase();
            if (!search) {
                product_parentdiv.style.display = "block";
            }
            else if (!product_title.includes(search)) {
                product_parentdiv.style.display = "none";
                //count_wrong_search++;
            }
            else if (product_title.includes(search)) {
                product_parentdiv.style.display = "block";
            }
        }
    }
    render() {
        return (
            <section className="search-sec">
                <div className="container">
                    <form action="/" method="post">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="row">
                                    <div className="col-lg-7 col-md-7 col-sm-12 p-0">
                                        <input type="text" className="form-control search-slt" placeholder="Enter a product name" name="search_input" onChange={this.handleInputChange} />
                                    </div>

                                    {/*<div className="col-lg-4 col-md-4 col-sm-12 p-0">
                                        
                                        <select className="form-control search-slt" id="exampleFormControlSelect1">
                                            <option>Select a Category</option>
                                            <option>Example one</option>
                                            <option>Example twe</option>
                                            <option>Example three</option>
                                            <option>Example four</option>
                                            <option>Example five</option>
                                            <option>Example six</option>
                                        </select>
                                    </div>*/}
                                    <div className="col-lg-5 col-md-5 col-sm-12 p-0.5 ">
                                        <button type="button" className="btn btn-primary wrn-btn search" onClick={this.searchProduct}>Search</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        );
    }
}

export default Search;
