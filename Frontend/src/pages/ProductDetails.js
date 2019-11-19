import React from 'react';



export default function productDetails() {
    return (
        < main class="mt-5 mb-5 pt-5" >
            <div class="container">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <div class="product-content product-wrap clearfix product-deatil">
                        <div class="row">
                            <div class="col-md-6 col-sm-12 col-xs-12 ">
                                <div class="product-image">
                                    <div id="demo" class="carousel slide" data-ride="carousel">
                                        <ul class="carousel-indicators">
                                            <li data-target="#demo" data-slide-to="0" class="active">
                                                <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Los Angeles" /></li>
                                            <li data-target="#demo" data-slide-to="1">
                                                <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Chicago" />
                                            </li>
                                            <li data-target="#demo" data-slide-to="2">
                                                <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="New York" />
                                            </li>

                                        </ul>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Los Angeles" />
                                            </div>
                                            <div class="carousel-item">
                                                <img src="https://images.pexels.com/photos/929831/pexels-photo-929831.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Chicago" />

                                            </div>
                                            <div class="carousel-item">
                                                <img src="https://images.pexels.com/photos/1432942/pexels-photo-1432942.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="New York" />

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12 col-xs-12">

                                <h2 class="name pt-3">
                                    Product Name Title Here</h2>
                                <hr />
                                <p class="desc">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                                <div class="row">
                                    <div class="col-md-6 price">
                                        <h2 class="font-weight-bold">300,00</h2>
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <button class="btn btn-zoid">
                                            Add to Cart
                                </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-12 mt-5">
                                <div class="description description-tabs">
                                    <ul id="myTab" class="nav nav-tabs">
                                        <li class="nav-item">
                                            <a class="nav-link active" href="#more-information" data-toggle="tab" class="no-margin">Description </a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#specifications" data-toggle="tab">Specifications</a></li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#reviews" data-toggle="tab">Reviews</a></li>
                                    </ul>
                                    <div id="myTabContent" class="tab-content">
                                        <div class="tab-pane container active in" id="more-information">
                                            <br />
                                            <strong>Description Title</strong>
                                            <p>Integer egestas, orci id condimentum eleifend, nibh nisi pulvinar eros, vitae ornare massa neque ut orci. Nam aliquet lectus sed odio eleifend, at iaculis dolor egestas. Nunc elementum pellentesque augue sodales porta. Etiam aliquet rutrum turpis, feugiat sodales ipsum consectetur nec. </p>
                                        </div>
                                        <div class="tab-pane container fade" id="specifications">
                                            <br />
                                            <dl class="">
                                                <dt>Gravina</dt>
                                                <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
                                                <dd>Donec id elit non mi porta gravida at eget metus.</dd>
                                                <dd>Eget lacinia odio sem nec elit.</dd>
                                                <br />

                                                <dt>Test lists</dt>
                                                <dd>A description list is perfect for defining terms.</dd>
                                                <br />

                                                <dt>Altra porta</dt>
                                                <dd>Vestibulum id ligula porta felis euismod semper</dd>
                                            </dl>
                                        </div>
                                        <div class="tab-pane container fade" id="reviews">
                                            <br />
                                            <form method="post" class="well padding-bottom-10" onsubmit="return false;">
                                                <textarea rows="2" class="form-control" placeholder="Write a review"></textarea>
                                                <div class="mt-2">
                                                    <button type="submit" class="btn btn-sm btn-primary pull-right">
                                                        Submit Review
                                                    </button>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Location"><i class="fa fa-location-arrow"></i></a>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Voice"><i class="fa fa-microphone"></i></a>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add Photo"><i class="fa fa-camera"></i></a>
                                                    <a class="btn btn-link profile-link-btn" rel="tooltip" data-placement="bottom" title="" data-original-title="Add File"><i class="fa fa-file"></i></a>
                                                </div>
                                            </form>

                                            <div class="chat-body no-padding profile-message">
                                                <ul>
                                                    <li class="message mt-2">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" class="online" />
                                                        <span class="message-text">
                                                            <a class="username">
                                                                <span class="font-weight-bold">Andreas  </span>
                                                                <span class="badge">Purchase Verified</span>
                                                                <span class="pull-right">
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-muted"></i>
                                                                </span>
                                                            </a>
                                                            Can't divide were divide fish forth fish to. Was can't form the, living life grass darkness
                                                        </span>

                                                    </li>
                                                    <li class="message mt-2">
                                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" class="online" />
                                                        <span class="message-text">
                                                            <a class="username">
                                                                <span class="font-weight-bold">Aragon Zarko </span>
                                                                <span class="badge">Purchase Verified</span>
                                                                <span class="pull-right">
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                    <i class="fa fa-star fa-1x text-primary"></i>
                                                                </span>
                                                            </a>
                                                            Excellent product, love it!
                                                        </span>

                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    )
}