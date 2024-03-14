const express = require('express');
const multer = require("multer");
const path = require("node:path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    const fileExt = path.extname(file.originalname);

    const fileName = file.originalname
      .replace(fileExt, "")
      .toLowerCase()
      .split(" ")
      .join("-");
 
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    cb(null, fileName + uniqueSuffix + fileExt);
  },
});

const upload = multer({ storage: storage });
const router = express.Router();
const Registration = require("../controller/RegistrationController")
const Otp = require("../controller/OtpMatch")
const Login = require("../controller/LoginController")
const {ReadProfile,UpdateProfile} = require("../controller/ProfileController")
const {foodBrandCreate,foodBrandGet,foodCategoryCreate,foodCategoryGet,foodItemCreate,foodItemyGet,foodDetails,DeletFood,UpdateFood,foodSearch,GetProductByBrand,GetProductByCategory} = require('../controller/FoodController')

// Authentication
router.post('/registration',Registration)
router.post('/otp/:email',Otp)
router.post('/login',Login)

// profile
router.get('/readprofile',ReadProfile)
router.post('/updateprofile',UpdateProfile)

// brand
router.post('/brandsave',foodBrandCreate)
router.get('/brandget',foodBrandGet)

// category
router.post('/categorysave',foodCategoryCreate)
router.get('/categoryget',foodCategoryGet)

// Food
router.post('/addfood',upload.single("img"),foodItemCreate)

router.get('/foodget',foodItemyGet)
router.post('/updateFood/:id',UpdateFood)
router.post('/deletFood',DeletFood)

// Food Search
router.get('/foodDetail/:id',foodDetails)
router.get('/foodsearch/:name',foodSearch)
router.get('/foodbrand/:brand',GetProductByBrand)
router.get('/foodcate/:category',GetProductByCategory)
module.exports = router