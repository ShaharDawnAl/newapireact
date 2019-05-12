import React, { Component } from 'react';
import './header.css';
import { Navbar, Form, Nav/*, NavDropdown, Dropdown, FormControl, Button*/, Carousel } from 'react-bootstrap';

class Header extends Component {

    render() {

        return (
            <div>
                <Navbar className="navbar navbar-inverse navbar-fixed-top navbar-expand-md bg-dark" variant="dark" >
                    <div className="container-fluid">

                        <div className="navbar-header">
                            <a href="/" className="nav-btn btn-dark btn-lg accordion-toggle pull-left" title="Follow Us" role="tab" id="social-collapse" data-toggle="collapse" data-parent="#accordion" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">&nbsp;</a>
                            <a id="menu-toggle" href="/" className="nav-btn btn-dark btn-lg toggle">
                                <i className="fa fa-bars" ></i>
                            </a>
                            <a id="to-top" className="btn btn-lg btn-inverse" href="#top">
                                <span className="sr-only">Toggle to Top Navigation</span>
                                <i className="fa fa-chevron-up"></i>
                            </a>
                        </div>

                        <div className="collapse navbar-collapse js-navbar-collapse" id="navbarSupportedContent">

                            <ul className="nav navbar-nav navbar-left">
                                <a className="navbar-brand" href="/">
                                    <img height="20" width="20" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAB+0lEQVR4AcyYg5LkUBhG+1X2PdZGaW3btm3btm3bHttWrPomd1r/2Jn/VJ02TpxcH4CQ/dsuazWgzbIdrm9dZVd4pBz4zx2igTaFHrhvjneVXNHCSqIlFEjiwMyyyOBilRgGSqLNF1jnwNQdIvAt48C3IlBmHCiLQHC2zoHDu6zG1iXn6+y62ScxY9AODO6w0pvAqf23oSE4joOfH6OxfMoRnoGUm+de8wykbFt6wZtA07QwtNOqKh3ZbS3Wzz2F+1c/QJY0UCJ/J3kXWJfv7VhxCRRV1jGw7XI+gcO7rEFFRvdYxydwcPsVsC0bQdKScngt4iUTD4Fy/8p7PoHzRu1DclwmgmiqgUXjD3oTKHbAt869qdJ7l98jNTEblPTkXMwetpvnftA0LLHb4X8kiY9Kx6Q+W7wJtG0HR7fdrtYz+x7iya0vkEtUULIzCjC21wY+W/GYXusRH5kGytWTLxgEEhePPwhKYb7EK3BQuxWwTBuUkd3X8goUn6fMHLyTT+DCsQdAEXNzSMeVPAJHdF2DmH8poCREp3uwm7HsGq9J9q69iuunX6EgrwQVObjpBt8z6rdPfvE8kiiyhsvHnomrQx6BxYUyYiNS8f75H1w4/ISepDZLoDhNJ9cdNUquhRsv+6EP9oNH7Iff2A9g8h8CLt1gH0Qf9NMQAFnO60BJFQe0AAAAAElFTkSuQmCC" className="img-responsive pull-left logoImg" alt="" />
                                    &nbsp;<b className="logobrand">Central Market</b></a>


                                <li className="dropdown mega-dropdown">

                                    <Nav.Link href="/home" className="dropdown-toggle" data-toggle="dropdown">Men <span className="caret"></span></Nav.Link>
                                    {/*<a href="/" className="dropdown-toggle" data-toggle="dropdown">Men <span className="caret"></span></a>*/}
                                    <ul className="dropdown-menu mega-dropdown-menu">
                                        <div className="row">
                                            <li className="col-sm-3 ">
                                                <ul>
                                                    <li className="dropdown-header">Men Collection</li>
                                                    <Carousel>
                                                        <Carousel.Item>

                                                            <button className="btn btn-primary" type="button">49,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            <h5 className="carouselTitles">Summer dress floral prints</h5>
                                                            <img
                                                                className="d-block w-100 img-responsive"
                                                                src="http://placehold.it/254x150/ff3546/f5f5f5/&text= &nbps;"
                                                                alt="product 1"
                                                            />
                                                            <Carousel.Caption>
                                                                {/*<h3>First slide label</h3>
                                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                        <Carousel.Item>

                                                            <button className="btn btn-primary" type="button">39,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            <h5 className="carouselTitles">Denin jacket stamped</h5>
                                                            <img
                                                                className="d-block w-100 img-responsive"
                                                                src="http://placehold.it/254x150/3498db/f5f5f5/&text= &nbps;"
                                                                alt="product 2"
                                                            />
                                                            <Carousel.Caption>
                                                                {/*<h3>Second slide label</h3>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                        <Carousel.Item>

                                                            <button className="btn btn-primary" type="button">9,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            <h5 className="carouselTitles">Gold sandals with shiny touch</h5>
                                                            <img
                                                                className="d-block w-100 img-responsive"
                                                                src="http://placehold.it/254x150/2ecc71/f5f5f5/&text= &nbps;"
                                                                alt="product 3"
                                                            />
                                                            <Carousel.Caption>
                                                                {/*<h3>Third slide label</h3>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                    </Carousel>

                                                    {/*<div id="menCollection" className="carousel slide" data-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="item active">
                                                                <a href="/"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1" /></a>
                                                                <h4><small>Summer dress floral prints</small></h4>
                                                                <button className="btn btn-primary" type="button">49,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"> Add to Wishlist</span> </button>
                                                            </div>
                                                            <div className="item">
                                                                <a href="/"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2" /></a>
                                                                <h4><small>Gold sandals with shiny touch</small></h4>
                                                                <button className="btn btn-primary" type="button">9,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"> Add to Wishlist</span> </button>
                                                            </div>
                                                            <div className="item">
                                                                <a href="/"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3" /></a>
                                                                <h4><small>Denin jacket stamped</small></h4>
                                                                <button className="btn btn-primary" type="button">49,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"> Add to Wishlist</span> </button>
                                                            </div>
                                                        </div>

                                                        <a className="left carousel-control" href="#menCollection" role="button" data-slide="prev">
                                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                        <a className="right carousel-control" href="#menCollection" role="button" data-slide="next">
                                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                            <span className="sr-only">Next</span>
                                                        </a>
                                                    </div>*/}
                                                    <li className=""></li>
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
                                </li>
                                <li className="dropdown mega-dropdown">
                                    <Nav.Link href="/home" className="dropdown-toggle" data-toggle="dropdown">Women <span className="caret"></span></Nav.Link>

                                    {/*<a href="/" className="dropdown-toggle" data-toggle="dropdown">Women <span className="caret"></span></a>*/}
                                    <ul className="dropdown-menu mega-dropdown-menu">

                                        <div className="row">

                                            <li className="col-sm-3 ">
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
                                                    <Carousel>
                                                        <Carousel.Item>

                                                            <button className="btn btn-primary" type="button">49,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            <h5 className="carouselTitles">Summer dress floral prints</h5>
                                                            <img
                                                                className="d-block w-100 img-responsive"
                                                                src="http://placehold.it/254x150/ff3546/f5f5f5/&text= &nbps;"
                                                                alt="product 1"
                                                            />
                                                            <Carousel.Caption>
                                                                {/*<h3>First slide label</h3>
                                                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>*/}
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                        <Carousel.Item>

                                                            <button className="btn btn-primary" type="button">39,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            <h5 className="carouselTitles">Denin jacket stamped</h5>
                                                            <img
                                                                className="d-block w-100 img-responsive"
                                                                src="http://placehold.it/254x150/3498db/f5f5f5/&text= &nbps;"
                                                                alt="product 2"
                                                            />
                                                            <Carousel.Caption>
                                                                {/*<h3>Second slide label</h3>
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>*/}
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                        <Carousel.Item>

                                                            <button className="btn btn-primary" type="button">9,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            <h5 className="carouselTitles">Gold sandals with shiny touch</h5>
                                                            <img
                                                                className="d-block w-100 img-responsive"
                                                                src="http://placehold.it/254x150/2ecc71/f5f5f5/&text= &nbps;"
                                                                alt="product 3"
                                                            />
                                                            <Carousel.Caption>
                                                                {/*<h3>Third slide label</h3>
                                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>*/}
                                                            </Carousel.Caption>
                                                        </Carousel.Item>
                                                    </Carousel>

                                                    {/*<div id="womenCollection" className="carousel slide" data-ride="carousel">
                                                        <div className="carousel-inner">
                                                            <div className="item active">
                                                                <a href="/"><img src="http://placehold.it/254x150/3498db/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 1" /></a>
                                                                <h4><small>Summer dress floral prints</small></h4>
                                                                <button className="btn btn-primary" type="button">49,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            </div>
                                                            <div className="item">
                                                                <a href="/"><img src="http://placehold.it/254x150/ff3546/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 2" /></a>
                                                                <h4><small>Gold sandals with shiny touch</small></h4>
                                                                <button className="btn btn-primary" type="button">9,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            </div>
                                                            <div className="item">
                                                                <a href="/"><img src="http://placehold.it/254x150/2ecc71/f5f5f5/&text=New+Collection" className="img-responsive" alt="product 3" /></a>
                                                                <h4><small>Denin jacket stamped</small></h4>
                                                                <button className="btn btn-primary" type="button">39,99 €</button> <button href="/" className="btn btn-default" type="button"><span className="glyphicon glyphicon-heart"></span> Add to Wishlist</button>
                                                            </div>
                                                        </div>

                                                        <a className="left carousel-control" href="#womenCollection" role="button" data-slide="prev">
                                                            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                                            <span className="sr-only">Previous</span>
                                                        </a>
                                                        <a className="right carousel-control" href="#womenCollection" role="button" data-slide="next">
                                                            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                                            <span className="sr-only">Next</span>
                                                        </a>
                                                    </div>*/}
                                                    <li className="divider"></li>
                                                    <li><a href="/">View all Collection <span className="glyphicon glyphicon-chevron-right pull-right"></span></a></li>
                                                </ul>
                                            </li>
                                        </div>
                                    </ul>
                                </li>
                                <li>{/*<a href="/">Store locator</a>*/}
                                    <Nav.Link href="/" ><span>Store Locator</span></Nav.Link>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right myAccount">
                                <li className="dropdown">
                                    {/*<a href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My account <span className="caret"></span></a>*/}
                                    <Nav.Link href="/" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">My account <span className="caret"></span></Nav.Link>
                                    <ul className="dropdown-menu" role="menu">
                                        <li><a href="/">Action</a></li>
                                        <li><a href="/">Another action</a></li>
                                        <li><a href="/">Something else here</a></li>
                                        <li className="divider"></li>
                                        <li><a href="/">Separated link</a></li>
                                    </ul>
                                </li>
                                <li>{/*<a href="/">My cart (0) items</a>*/}
                                    <Nav.Link href="/" ><span>My cart (0) items</span></Nav.Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Navbar>
                <Navbar id="sidebar-wrapper">
                    <ul className="sidebar-nav">
                        <a id="menu-close" href="/" className="btn btn-danger pull-right1 hidden-md hidden-lg toggle"><i className="fa fa-times"></i></a>
                        <li className="sidebar-brand">
                            <a href="#top">Centeral Market</a>
                        </li>
                        <li>
                            <a href="/" title="Go to Top">Home</a>
                        </li>
                        <li>
                            <a href="#products" title="Products">Products</a>
                        </li>
                        <li>
                            <a href="#Links" title="Navigate through the site">Links</a>
                        </li>
                        <li>
                            <a href="/" data-toggle="modal" data-href="#loginModal" data-target="#loginModal" >Login/Signup</a>
                        </li>
                        <li>
                            <a href="#about" title="Go to About Us section">About</a>
                        </li>
                    </ul>
                </Navbar>
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

                                        <Form inline method="post" acceptCharset="utf-8" autoComplete="off" role="form" className="form-horizontal" action="https://secure.yourwebhosting.com/secureLogin" encType="application/x-www-form-urlencoded">
                                            <fieldset>
                                                <input type='hidden' name='__token_timestamp__' value='1426572610' />
                                                <input type='hidden' name='__token_val__' value='4d96cad055fac46518825357fcb49390' />
                                                <input type="hidden" name="destination" value="http://www.yourwebhosting.com/controlpanel/index.bml" />

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
                                                        <button type="submit" name="submit" value="Sign In" className="btn btn-lg">Submit</button>
                                                    </div>
                                                </div>
                                            </fieldset>
                                        </Form>
                                    </article>
                                </div>
                                <div className="modal-footer">
                                    Login Problems?
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

export default Header;
