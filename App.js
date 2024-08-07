// const express = require('express');
// const mongoose = require('mongoose');
// const Listing=require("./models/listing.js");
// const app = express();
// const methodOverride = require('method-override');
// app.use(methodOverride('_method'));
// const ejsMate=require("ejs-mate");
// app.engine('ejs',  ejsMate);
// const path=require("path");
// app.set('view engine', 'ejs');
// app.set("views", path.join(__dirname,"views"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, '/public')));
 
// const wrapAsync=require("./utils/wrapAsync.js");
// const  ExpressError=require("./utils/ExpressError.js");

// // Define Mongoose connection URL
// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// main()
// .then(()=>{
//    console.log("connected to DB")
// })
// .catch((err)=>{
//    console.log(err);
// })

// async function main(){
//    await mongoose.connect(MONGO_URL);
// }

 
// app.get('/', (req, res) => {
//   res.send("Hi Usama");
// });

 
// app.get("/listings", wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render("listings/index.ejs", { allListings });
//   }));

//   //New Route
//   app.get("/listings/new", (req, res) => {
//     res.render("listings/new.ejs");
//   });
    

//   //Show Route

//   app.get("/listings/:id",  wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send('Invalid listing ID');
//     }

//     try {
//         const listing = await Listing.findById(id);

//         if (!listing) {
//             return res.status(404).send('Listing not found');
//         }

//         res.render("listings/show", { listing });
//     } catch (err) {
//         console.error("Error fetching listing:", err); // Log the actual error for debugging
//         res.status(500).send("Error fetching listing");
//     }
// }));


 
// //Create Route
// app.post("/listings", 
  
//   wrapAsync(async (req, res,next) => {
//    if(!req.body.listing){
//       throw new ExpressError(400 , "Send valid data for listing");
//    }
   
//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect("/listings");
//   })
    
//   );




// //Edit Route
// app.get("/listings/:id/edit",  wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render("listings/edit.ejs", { listing });
//   }));
  
//   //Update Route
//   app.put("/listings/:id",  wrapAsync(async (req,  res) => {

//     if(!req.body.listing){
//       throw new ExpressError(400 , "Send valid data for listing");
//    }
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect(`/listings/${id}`);
//   }));  


// //Delete Route
// app.delete("/listings/:id",  wrapAsync(async (req, res) => {
//     let { id } = req.params;
//     let deletedListing = await Listing.findByIdAndDelete(id);
//     console.log(deletedListing);
//     res.redirect("/listings");
//   }));
  

// // app.get("/testListing",async (req, res)=>{
// //     let sampleListing=new Listing({
// //         title:"My New Villa",
// //         description:"By the beach",
// //         price:10000,
// //         country:"Pakistan",
// //         location:"Lahore",
            
           
// //     });
// //     await sampleListing.save();
// //     console.log("sample was saved");
// //     res.send("successful testing");
// // }) 


// app.all("*" ,(req , res , next)=>{
//         next(new ExpressError(404 , "Page Not Found!"))
// });




// app.use((err , req ,res, next)=>{
//   let {statuCode , message}=err;
//   res.status(statuCode.send(message));
//     //  res.send("something went wrong");
// });


// // Start the server
// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });








// const express = require('express');
// const mongoose = require('mongoose');
// const Listing = require('./models/listing.js');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const wrapAsync = require('./utils/wrapAsync.js');
// const ExpressError = require('./utils/ExpressError.js');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.get('/listings', wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render('listings/index', { allListings });
// }));

// app.get('/listings/new', (req, res) => {
//     res.render('listings/new');
// });

// app.get('/listings/:id', wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send('Invalid listing ID');
//     }

//     const listing = await Listing.findById(id);

//     if (!listing) {
//         return res.status(404).send('Listing not found');
//     }

//     res.render('listings/show', { listing });
// }));

// app.post('/listings', wrapAsync(async (req, res, next) => {
//     if (!req.body.listing) {
//         throw new ExpressError(400, 'Send valid data for listing');
//     }

//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect('/listings');
// }));

// app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render('listings/edit', { listing });
// }));

// app.put('/listings/:id', wrapAsync(async (req, res) => {
//     if (!req.body.listing) {
//         throw new ExpressError(400, 'Send valid data for listing');
//     }

//     const { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect(`/listings/${id}`);
// }));

// app.delete('/listings/:id', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     await Listing.findByIdAndDelete(id);
//     res.redirect('/listings');
// }));

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render("error.ejs" ,{message});
//     // res.status(statusCode).send(message);
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const Listing = require('./models/listing');
// const Review = require('./models/review');  // Import the Review model
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.get('/listings', wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render('listings/index', { allListings });
// }));

// app.get('/listings/new', (req, res) => {
//     res.render('listings/new');
// });

// app.get('/listings/:id', wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send('Invalid listing ID');
//     }

//     const listing = await Listing.findById(id).populate('reviews');  // Populate reviews

//     if (!listing) {
//         return res.status(404).send('Listing not found');
//     }

//     res.render('listings/show', { listing });
// }));

// app.post('/listings', wrapAsync(async (req, res, next) => {
//     if (!req.body.listing) {
//         throw new ExpressError(400, 'Send valid data for listing');
//     }

//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect('/listings');
// }));

// app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render('listings/edit', { listing });
// }));

// app.put('/listings/:id', wrapAsync(async (req, res) => {
//     if (!req.body.listing) {
//         throw new ExpressError(400, 'Send valid data for listing');
//     }

//     const { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect(`/listings/${id}`);
// }));

// app.delete('/listings/:id', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     await Listing.findByIdAndDelete(id);
//     res.redirect('/listings');
// }));

// // Route to handle review submission
// app.post('/listings/:id/reviews', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//         return res.status(404).send('Listing not found');
//     }
//     const review = new Review({
//         user: req.body.user,
//         rating: req.body.rating,
//         comment: req.body.comment,
//         listing: listing._id
//     });
//     await review.save();
//     listing.reviews.push(review);
//     await listing.save();
//     res.redirect(`/listings/${listing._id}`);
// }));

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render("error.ejs" ,{message});
//     // res.status(statusCode).send(message);
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
















// const express = require('express');
// const mongoose = require('mongoose');
// const Listing = require('./models/listing');
// const Review = require('./models/review');  // Import the Review model
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.get('/listings', wrapAsync(async (req, res) => {
//     const allListings = await Listing.find({});
//     res.render('listings/index', { allListings });
// }));

// app.get('/listings/new', (req, res) => {
//     res.render('listings/new');
// });

// app.get('/listings/:id', wrapAsync(async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) {
//         return res.status(404).send('Invalid listing ID');
//     }

//     const listing = await Listing.findById(id).populate('reviews');  // Populate reviews

//     if (!listing) {
//         return res.status(404).send('Listing not found');
//     }

//     res.render('listings/show', { listing });
// }));

// app.post('/listings', wrapAsync(async (req, res, next) => {
//     if (!req.body.listing) {
//         throw new ExpressError(400, 'Send valid data for listing');
//     }

//     const newListing = new Listing(req.body.listing);
//     await newListing.save();
//     res.redirect('/listings');
// }));

// app.get('/listings/:id/edit', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     res.render('listings/edit', { listing });
// }));

// app.put('/listings/:id', wrapAsync(async (req, res) => {
//     if (!req.body.listing) {
//         throw new ExpressError(400, 'Send valid data for listing');
//     }

//     const { id } = req.params;
//     await Listing.findByIdAndUpdate(id, { ...req.body.listing });
//     res.redirect(`/listings/${id}`);
// }));

// app.delete('/listings/:id', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     await Listing.findByIdAndDelete(id);
//     res.redirect('/listings');
// }));

// // Route to handle review submission
// app.post('/listings/:id/reviews', wrapAsync(async (req, res) => {
//     const { id } = req.params;
//     const listing = await Listing.findById(id);
//     if (!listing) {
//         return res.status(404).send('Listing not found');
//     }
//     const review = new Review({
//         user: req.body.user,
//         rating: req.body.rating,
//         comment: req.body.comment,
//         listing: listing._id
//     });
//     await review.save();
//     listing.reviews.push(review);
//     await listing.save();
//     res.redirect(`/listings/${listing._id}`);
// }));

// // Route to handle review deletion
// app.delete('/listings/:listingId/reviews/:reviewId', wrapAsync(async (req, res) => {
//     const { listingId, reviewId } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(listingId) || !mongoose.Types.ObjectId.isValid(reviewId)) {
//         return res.status(404).send('Invalid ID');
//     }

//     await Listing.findByIdAndUpdate(listingId, { $pull: { reviews: reviewId } });
//     await Review.findByIdAndDelete(reviewId);

//     res.redirect(`/listings/${listingId}`);
// }));

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render("error.ejs" ,{message});
//     // res.status(statusCode).send(message);
// });                                                                                                     //Fully Code 

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
























// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const listingRoutes = require('./routes/listing'); // Import the listing routes
// const reviewRoutes = require('./routes/review');   // Import the review routes
// const session=require("express-session");
// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.use('/listings', listingRoutes); // Use the listing routes
// app.use('/listings', reviewRoutes);  // Use the review routes

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render("error.ejs" ,{message});
//     // res.status(statusCode).send(message);
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });













// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });









 

// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });









// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const multer = require('multer');
// const User = require('./models/user');
// const Listing = require('./models/listing'); // Assuming you have a Listing model
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');

// const app = express();

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// // Multer setup for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/'); // Upload directory
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// // Routes setup
// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// // Route to handle the listing creation with image upload
// app.post('/listings', upload.single('imageUpload'), wrapAsync(async (req, res) => {
//     const { title, description, country, price, location } = req.body.listing;
//     let image = req.body.listing.imageLink;

//     // Check if file is uploaded
//     if (req.file) {
//         image = `/uploads/${req.file.filename}`;
//     }

//     const newListing = new Listing({
//         title,
//         description,
//         image,
//         country,
//         price,
//         location
//     });

//     await newListing.save();
//     req.flash('success', 'Listing created successfully!');
//     res.redirect('/listings');
// }));

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });









// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const fs = require('fs');

// const app = express();

// const uploadDir = path.join(__dirname, 'public/uploads');

// // Ensure uploads directory exists
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';

// async function main() {
//     await mongoose.connect(MONGO_URL);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.get('/', (req, res) => {
//     res.send('Hi Usama');
// });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const multer = require('multer');
// const fs = require('fs');

// const app = express();

// const uploadDir = path.join(__dirname, 'public/uploads');

// // Ensure uploads directory exists
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// // const MONGO_URL = 'mongodb://127.0.0.1:27017/wanderlust';
// const dburl=process.env.ATLASBD_URL;
// async function main() {
//     await mongoose.connect(dburl);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// // app.get('/', (req, res) => {
// //     res.send('Hi Usama');
// // });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });





 





// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const multer = require('multer');
// const fs = require('fs');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();

// const uploadDir = path.join(__dirname, 'public/uploads');

// // Ensure uploads directory exists
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// const dburl = process.env.ATLASBD_URL;
// async function main() {
//     if (!dburl) {
//         throw new Error("MongoDB URL is not defined in environment variables.");
//     }
//     await mongoose.connect(dburl);
// }

// main()
//     .then(() => {
//         console.log('connected to DB');
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
























// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const multer = require('multer');
// const fs = require('fs');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();

// const uploadDir = path.join(__dirname, 'public/uploads');

// // Ensure uploads directory exists
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// // Ensure you have the correct MongoDB URI in your .env file
// const dburl = process.env.ATLASBD_URL;

// async function main() {
//     if (!dburl) {
//         throw new Error("MongoDB URL is not defined in environment variables.");
//     }
//     await mongoose.connect(dburl, { useNewUrlParser: true, useUnifiedTopology: true });
// }

// main()
//     .then(() => {
//         console.log('Connected to DB');
//     })
//     .catch((err) => {
//         console.error('Failed to connect to DB:', err);
//     });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });









// const express = require('express');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');
// const ejsMate = require('ejs-mate');
// const path = require('path');
// const session = require('express-session');
// const flash = require('connect-flash');
// const passport = require('passport');
// const LocalStrategy = require('passport-local');
// const User = require('./models/user');
// const listingRoutes = require('./routes/listing');
// const reviewRoutes = require('./routes/review');
// const userRoutes = require('./routes/user');
// const wrapAsync = require('./utils/wrapAsync');
// const ExpressError = require('./utils/ExpressError');
// const multer = require('multer');
// const fs = require('fs');
// require('dotenv').config(); // Load environment variables from .env file

// const app = express();

// const uploadDir = path.join(__dirname, 'public/uploads');

// // Ensure uploads directory exists
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
// }

// // Set up multer for file uploads
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// });
// const upload = multer({ storage: storage });

// app.use(methodOverride('_method'));
// app.engine('ejs', ejsMate);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

// const sessionConfig = {
//     secret: 'defaultsecret',
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         httpOnly: true,
//         secure: process.env.NODE_ENV === 'production',
//         expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
//         maxAge: 1000 * 60 * 60 * 24 * 7,
//     },
// };
// app.use(session(sessionConfig));
// app.use(flash());

// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//     res.locals.success = req.flash('success');
//     res.locals.error = req.flash('error');
//     res.locals.currentUser = req.user;
//     next();
// });

// // Ensure you have the correct MongoDB URI in your .env file
// const dburl = process.env.ATLASBD_URL;

// async function main() {
//     if (!dburl) {
//         throw new Error("MongoDB URL is not defined in environment variables.");
//     }
//     await mongoose.connect(dburl);
// }

// main()
//     .then(() => {
//         console.log('Connected to DB');
//     })
//     .catch((err) => {
//         console.error('Failed to connect to DB:', err);
//     });

// app.use('/', userRoutes);
// app.use('/listings', listingRoutes);
// app.use('/listings', reviewRoutes);

// app.all('*', (req, res, next) => {
//     next(new ExpressError(404, 'Page Not Found!'));
// });

// app.use((err, req, res, next) => {
//     const { statusCode = 500, message = 'Something went wrong' } = err;
//     res.status(statusCode).render('error.ejs', { message });
// });

// const port = 3000;
// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });



















const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');
const path = require('path');
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/user');
const listingRoutes = require('./routes/listing');
const reviewRoutes = require('./routes/review');
const userRoutes = require('./routes/user');
const wrapAsync = require('./utils/wrapAsync');
const ExpressError = require('./utils/ExpressError');
const multer = require('multer');
const fs = require('fs');
const MongoStore = require('connect-mongo');
require('dotenv').config(); // Load environment variables from .env file

const app = express();

const uploadDir = path.join(__dirname, 'public/uploads');

// Ensure uploads directory exists
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

app.use(methodOverride('_method'));
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Ensure you have the correct MongoDB URI in your .env file
const dburl = process.env.ATLASBD_URL;

if (!dburl) {
    throw new Error("MongoDB URL is not defined in environment variables.");
}

const sessionStore = MongoStore.create({
    mongoUrl: dburl,
    secret: process.env.SECRET, // This should be the same secret as in sessionConfig
    touchAfter: 24 * 3600 // time period in seconds
});

const sessionConfig = {
    store: sessionStore,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
};

app.use(session(sessionConfig));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;
    next();
});

async function main() {
    await mongoose.connect(dburl);
}

main()
    .then(() => {
        console.log('Connected to DB');
    })
    .catch((err) => {
        console.error('Failed to connect to DB:', err);
    });

app.use('/', userRoutes);
app.use('/listings', listingRoutes);
app.use('/listings', reviewRoutes);

app.all('*', (req, res, next) => {
    next(new ExpressError(404, 'Page Not Found!'));
});

app.use((err, req, res, next) => {
    const { statusCode = 500, message = 'Something went wrong' } = err;
    res.status(statusCode).render('error.ejs', { message });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
