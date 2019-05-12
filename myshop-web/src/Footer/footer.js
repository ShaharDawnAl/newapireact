import React, { Component } from 'react';
import './footer.css';

class footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container bottom_border">
                    <div className="row">
                        <div className=" col-sm-3 col-md col-sm-6  col-12 col ">
                            <h5 className="headin5_amrc col_white_amrc pt2">Find Us</h5>

                            <p className="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p><i className="fa fa-location-arrow"></i>&nbsp; 9878/25 sec 9 fetucini 35</p>
                            <p><i className="fa fa-phone"></i>&nbsp;+972-5596341  </p>
                            <p><i className="fa fa fa-envelope"></i>&nbsp;info@host.com  </p>


                        </div>

                        <div className=" col-sm-3 col-md  col-6 col p-0">
                            <h5 className="headin5_amrc col_white_amrc pt2">Customer Information</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">FAQ's</a></li>
                                <li><a href="/">Sell Your Items</a></li>
                                <li><a href="/">Contact Us</a></li>
                                <li><a href="/">RSS</a></li>
                                <li><a href="/">More Links</a></li>
                            </ul>

                        </div>

                        <div className=" col-sm-3 col-md  col-6 col  p-0">
                            <h5 className="headin5_amrc col_white_amrc pt2">Security & Privacy</h5>

                            <ul className="footer_ul_amrc">
                                <li><a href="/">Terms Of Use</a></li>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Return/Refund Policy</a></li>
                                <li><a href="/">Store Locations</a></li>
                                <li><a href="/">More Links</a></li>
                                <li><a href="/">More Links</a></li>
                            </ul>
                        </div>

                        <div className=" col-sm-3 col-md  col-6 col  p-0">
                            <h5 className="headin5_amrc col_white_amrc pt2">Help Center</h5>
                            {/* eslint-disable-next-line react/jsx-no-target-blank */}
                            <ul className="footer_ul_amrc">
                                <li><a href="/">How to Pay</a></li>
                                <li><a href="/">FAQ's</a></li>
                                <li><a href="/">Sitemap</a></li>
                                <li><a href="/">Ebay & Amazon</a></li>
                                <li><a href="/">Delivery info</a></li>
                                <li><a href="/">More Links</a></li>
                            </ul>

                        </div>



                        <div className=" col-sm-3 col-md  col-6 col p-0">
                            <h5 className="headin5_amrc col_white_amrc pt2">Follow Us</h5>

                            <ul className="footer_ul2_amrc">
                                <li><a href="/"><i className="fab fa-twitter fleft "></i></a><span><p>&nbsp; Tweet Us </p></span><a href="/">https://www.twitter.com/</a></li>
                                <li><a href="/"><i className="fab fa-instagram fleft "></i></a><span><p>&nbsp; Follow Us on IG </p></span><a href="/">https://www.instagram.com/</a></li>
                                <li><a href="/"><i className="fab fa-facebook-f fleft "></i></a><span><p>&nbsp; Facebook Page </p></span><a href="/">https://www.facebook.com/</a></li>
                            </ul>

                        </div>
                    </div>
                </div>


                <div className="container">
                    {/*
                    <ul className="foote_bottom_ul_amrc">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Services</a></li>
                        <li><a href="/">Pricing</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>*/}

                    <p className="text-center">Copyright @2019 | Designed With by <a href="/">Centeral Market &copy;</a></p>

                    <ul className="social_footer_ul  p-0">
                        <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                        <li><a href="/"><i className="fab fa-instagram"></i></a></li>
                    </ul>

                </div>

            </footer>
        )
    }
}

export default footer;
