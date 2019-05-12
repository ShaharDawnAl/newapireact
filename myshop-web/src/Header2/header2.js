import React, { Component } from 'react';
import './header2.css';
import Search from '../Search/search';


class Header2 extends Component {

    

    render() {
        
        
        return (
            
            <div>
                <nav className="navbar navbar-icon-top navbar-expand-lg navbar-dark bg-dark" >
                    <a id="to-top" className="btn btn-lg btn-inverse" href="#top">
                        <span className="sr-only">Toggle to Top Navigation</span>
                        <i className="fa fa-chevron-up"></i>
                    </a>
                    <a className="navbar-brand " href="/">CENTRAL MARKET</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto padding-right">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    <i className="fa fa-home"></i>
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>

                            <li className="nav-item dropdown mega-dropdown ">
                                <div className=" dropdown-toggle nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i className="fas fa-male" style={{ fontSize: "26px", color: "white", cursor: "pointer" }}></i><br /><span style={{ cursor: "pointer" }}>Men</span> <span className="caret"></span>
                                    <ul className="dropdown-menu mega-dropdown-menu">
                                        <div className="row" >
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header" >Men Collection</li>
                                                    <div id="womenCollection" className="carousel slide" data-ride="carousel">
                                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                            <ol className="carousel-indicators">
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                            </ol>

                                                            <div className="carousel-inner">
                                                                <div className="carousel-item active">
                                                                    <h6>Summer dress floral prints</h6>
                                                                    <a href="/" className="btn " ><b>49,99 €</b></a> <button href="/" className="btn-primary  btn-responsive" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                                    <img className="d-block w-100" src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" alt="First slide" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <h6>Gold sandals with shiny touch</h6>
                                                                    <a href="/" className="btn " ><b>9,99 €</b></a> <button href="/" className="btn-primary btn-responsive" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                                    <img className="d-block w-100" src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" alt="Second slide" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <h6>Denin jacket stamped</h6>
                                                                    <a href="/" className="btn "><b>49,99 €</b></a> <button href="/" className="btn-primary btn-responsive" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                                    <img className="d-block w-100" src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" alt="Third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <li className="divider"></li>
                                                    <li><a href="/">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Features</li>
                                                    <li><a href="/">Auto Carousel</a></li>
                                                    <li><a href="/">Carousel Control</a></li>
                                                    <li><a href="/">Left & Right Navigation</a></li>
                                                    <li><a href="/">Four Columns Grid</a></li>
                                                    <li className="divider"></li>
                                                    <li className="dropdown-header">Fonts</li>
                                                    <li><a href="/">Glyphicon</a></li>
                                                    <li><a href="/">Google Fonts</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Plus</li>
                                                    <li><a href="/">Navbar Inverse</a></li>
                                                    <li><a href="/">Pull Right Elements</a></li>
                                                    <li><a href="/">Coloured Headers</a></li>
                                                    <li><a href="/">Primary Buttons & Default</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Much more</li>
                                                    <li><a href="/">Easy to Customize</a></li>
                                                    <li><a href="/">Calls to action</a></li>
                                                    <li><a href="/">Custom Fonts</a></li>
                                                    <li><a href="/">Slide down on Hover</a></li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </li>

                            <li className="nav-item dropdown mega-dropdown">
                                <div className=" dropdown-toggle nav-link" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ><i className="fas fa-female" style={{ fontSize: "26px", color: "white", cursor: "pointer" }}></i><br /><span style={{ cursor: "pointer" }}>Women </span> <span className="caret"></span>
                                    <ul className="dropdown-menu mega-dropdown-menu">
                                        <div className="row">
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Features</li>
                                                    <li><a href="/">Auto Carousel</a></li>
                                                    <li><a href="/">Carousel Control</a></li>
                                                    <li><a href="/">Left & Right Navigation</a></li>
                                                    <li><a href="/">Four Columns Grid</a></li>
                                                    <li className="divider"></li>
                                                    <li className="dropdown-header">Fonts</li>
                                                    <li><a href="/">Glyphicon</a></li>
                                                    <li><a href="/">Google Fonts</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Plus</li>
                                                    <li><a href="/">Navbar Inverse</a></li>
                                                    <li><a href="/">Pull Right Elements</a></li>
                                                    <li><a href="/">Coloured Headers</a></li>
                                                    <li><a href="/">Primary Buttons & Default</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Much more</li>
                                                    <li><a href="/">Easy to Customize</a></li>
                                                    <li><a href="/">Calls to action</a></li>
                                                    <li><a href="/">Custom Fonts</a></li>
                                                    <li><a href="/">Slide down on Hover</a></li>
                                                </ul>
                                            </li>
                                            <li className="col-sm-3">
                                                <ul>
                                                    <li className="dropdown-header">Women Collection</li>
                                                    

                                                    <div id="womenCollection" className="carousel slide" data-ride="carousel">
                                                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                                            <ol className="carousel-indicators">
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                                            </ol>

                                                            <div className="carousel-inner">
                                                                <div className="carousel-item active">
                                                                    <h6>Summer dress floral prints</h6>
                                                                    <a href="/" className="btn " ><b>49,99 €</b></a> <button href="/" className="btn-primary  btn-responsive" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                                    <img className="d-block w-100" src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" alt="First slide" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <h6>Gold sandals with shiny touch</h6>
                                                                    <a href="/" className="btn " ><b>9,99 €</b></a> <button href="/" className="btn-primary btn-responsive" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                                    <img className="d-block w-100" src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" alt="Second slide" />
                                                                </div>
                                                                <div className="carousel-item">
                                                                    <h6>Denin jacket stamped</h6>
                                                                    <a href="/" className="btn "><b>49,99 €</b></a> <button href="/" className="btn-primary btn-responsive" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                                    <img className="d-block w-100" src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" alt="Third slide" />
                                                                </div>
                                                            </div>
                                                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <li className="divider"></li>
                                                    <li><a href="/">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </div>
                            </li>

                        </ul>
                        <ul className="navbar-nav ">
                            
                            <div className="nav-item">
                                <div className="nav-link" href="/">
                                    <Search />
                                </div>
                            </div>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="fa fa-globe">
                                        <span className="badge badge-success">5</span>
                                    </i>
                                    Notifications
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    <i className="fa fa-envelope-o">
                                        <span className="badge badge-danger">6</span>
                                    </i>
                                    Messages
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/" data-toggle="modal" data-href="#loginModal" data-target="#loginModal" style={{ cursor: "pointer" }}>
                                <i className="fa fa-sign-in"></i>
                                Login/SignUp
                                </a>
                            </li>
                            
                            
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="loginModal" aria-hidden="true">
                        <div className="modal-dialog modal-default">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                                    <h3>Login Control Panel</h3>
                                </div>
                                <div className="modal-body">
                                    <article className="container-form center-block">

                                        <form  method="post" acceptCharset="utf-8" autoComplete="off" className="form-horizontal" action="/" encType="application/x-www-form-urlencoded">
                                            <fieldset>
                                                <input type='hidden' name='__token_timestamp__' value='' />
                                                <input type='hidden' name='__token_val__' value='' />
                                                <input type="hidden" name="destination" value="" />

                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="credential_0">Username: </label>
                                                    <div className="col-xs-12">
                                                        <input id="credential_0" name="credential_0" type="text" placeholder="Your Username" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group">
                                                    <label className="sr-only" htmlFor="credential_1">Password: </label>
                                                    <div className="col-xs-12">
                                                        <input id="email" type="password" name="credential_1" placeholder="Your Password" className="form-control" />
                                                    </div>
                                                </div>

                                                <div className="form-group pull-right">
                                                    <div className="col-md-12 text-right">
                                                        <button type="submit" name="submit" value="Sign In" className="btn btn-primary btn-lg">Submit</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </form>
                                    </article>
                                </div>
                                <div className="modal-footer">
                                    <div className="padding-right"> Login Problems?</div>
							<button type="submit" className="btn btn-dark" data-dismiss="modal" data-href="#collapseTwo" data-toggle="collapse" data-target="#collapseTwo" >Contact Us</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <aside id="accordion" className="social text-vertical-center">
                    <div className="accordion-social">
                        <ul className="panel-collapse collapse in nav nav-stacked" role="tabpanel" aria-labelledby="social-collapse" id="collapseOne">
                            <li><a href="https://www.facebook.com/"  ><i className="fa fa-lg fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com/"  ><i className="fa fa-lg fa-twitter"></i></a></li>
                            <li><a href="https://www.plus.google.com/"  ><i className="fa fa-lg fa-google-plus"></i></a></li>
                            <li><a href="skype:live:?call"><i className="fa fa-lg fa-skype"  ></i></a></li>
                        </ul>
                    </div>
                </aside>
                
            </div>
        )
    }
}

export default Header2;
