var express = require('express');

var app = express();

var bodyParser = require('body-parser');
var MongoClient = require('mongoose');
var db = MongoClient.connect('mongodb://localhost/myShop', { useNewUrlParser: true });

var Product = require('./model/product');
var WishList = require('./model/wishlist');

/*
db.products.insert({"price":"38.99","title":"EYBLADE Burst Turbo Slingshock Rail","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/81I4H6pFBML._SX679_.jpg"});
db.products.insert({"price":"19.55","title":"Little Live Scruff-A-Luvs","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/614l9BeINUL._SL1000_.jpg"});
db.products.insert({"price":"16.99","title":"Codenames","imgUrl":"https://images-na.ssl-images-amazon.com/images/I/71ZHkM7fHwL._SL1000_.jpg"});
db.products.insert({"price":"6.99","title":"Melissa & Doug Burrow Bunny Rabbit","imgUrl":"https://m.media-amazon.com/images/I/71kepsVW+CL._AC_UL480_FMwebp_QL65_.jpg"});
db.products.insert({"price":"18.15","title":"LEGO Technic WHACK!","imgUrl":"https://m.media-amazon.com/images/I/A1UGqtmrNjL._AC_UL480_FMwebp_QL65_.jpg"});
db.products.insert({"price":"43.90","title":"Funko Pop Disney: Aladdin","imgUrl":"https://m.media-amazon.com/images/I/61esLXeOabL._AC_UL480_FMwebp_QL65_.jpg"});
db.products.insert({"price":"35.54","title":"Crayola Silly Scents Twistables Crayons","imgUrl":"https://m.media-amazon.com/images/I/A1b4-xxlD9L._AC_UL480_FMwebp_QL65_.jpg"});
db.products.insert({"price":"64.70","title":"LEGO Marvel Super Heroes Avengers","imgUrl":"https://m.media-amazon.com/images/I/91CEiEUlM0L._AC_UL480_FMwebp_QL65_.jpg"});
*/
var PORT = 3004;

//Allow all requests from all domains & localhost
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET");
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post('/product', function (req, res) {
    //Alternatives for product init instead of the below init
    //var product = new Product(req.body);
    //var product = new Product({title:req.body.title,price:req.body.price});

    var product = new Product();
    product.title = req.body.title;
    product.price = req.body.price;
    product.imgUrl = req.body.imgUrl;

    product.save(function (err, savedProduct) {
        if (err) {
            res.status(500).send({ error: "Couldn't Save product" });
        } else {
            res.send(savedProduct);
        }
    });
});


app.get('/product', function (req, res) {
    Product.find({}, function (err, products) {
        if (err) {
            res.status(500).send({ error: "Couldn't fetch products" });
        } else {
            res.send(products);
        }
    });
});


app.post('/wishlist', function (req, res) {
    var wishList = new WishList();
    wishList.title = req.body.title;
    wishList.save(function (err, newWishList) {
        if (err) {
            res.status(500).send({ error: "Couldn't create wishlist" });
        } else {
            res.send(newWishList);
        }
    });
});

app.put('/wishlist/product/add', function (req, res) {
    Product.findOne({ _id: req.body.productId }, function (err, product) {
        if (err) {
            res.status(500).send({ error: "Couldn't add item to wishlist" });
        } else {
            WishList.updateOne({ _id: req.body.wishListId }, {
                $addToSet: { products: product._id }
            }, function (err, wishList) {
                if (err) {
                    res.status(500).send({ error: "Couldn't add item to wishlist" });
                } else {
                    res.send(wishList);
                }
            });
        }
    });
});

app.get('/wishlist', function (req, res) {
    WishList.find({}).populate({ path: 'products', model: 'Product' }).exec(
        function (err, wishLists) {
            if (err) {
                res.status(500).send({ error: "Couldn't fetch wishlists" });
            } else {
                res.send(wishLists);
            }
        });
});



app.listen(PORT, function () {
    console.log('Shop API running on port ' + PORT + '!');
});

