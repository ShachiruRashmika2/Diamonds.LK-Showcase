//Asigning Dependency Packages
const express=require("express");
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const dotenv=require("dotenv");
const cors=require("cors");


//Imprt utilities
const DBconnect= require("./config/DB_Connect");

//configuire Port

dotenv.config();

const PORT=process.env.PORT|| 8070;

DBconnect();

//set route paths
const Userrouter=require("./routes/UserRoutes");
const customer_route=require("./routes/customRoute");
const Employee_router=require("./routes/employee");
const ready_made_Route=require("./routes/readyMadeRoute");
const ShowCaseCat_Route=require("./routes/showcaseCat_Route");
const FList_route=require("./routes/jewfeaList_route")
const cusRate_route=require("./routes/CustomerRate_route");
const showCitem_route=require("./routes/showcaseItem_Route");
const showCCart_route=require("./routes/cart");
const wishlist_route=require("./routes/wishlist");

/********************Inventory************************ */

const routerM = require("./routes/Inventory/MaterialRoutes");

const routerS = require("./routes/Inventory/SupplierRoutes");
const routerR = require("./routes/Inventory/ReserveRoutes");
const routerMO = require("./routes/Inventory/MaterialoutRoutes");
const routerMI = require("./routes/Inventory/MaterialinRoutes");


//......................
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());

app.use("/cus",customer_route);
app.use("/RMitem",ready_made_Route);
app.use("/employee",Employee_router);
app.use("/showcat",ShowCaseCat_Route);
app.use("/Flist",FList_route);
app.use("/showrate",cusRate_route);
app.use("/showCitem",showCitem_route);
app.use("/cart",showCCart_route);
app.use("/wishlist",wishlist_route);
app.use("/users",Userrouter);

/********************Inventory*************************** */
app.use("/materials", routerM);
app.use("/suppliers", routerS);
app.use("/reserves", routerR);
app.use("/materialouts", routerMO);
app.use("/materialins", routerMI);

//connection configuration
app.listen(PORT,()=>{

 console.log('Server is Running on port:',PORT);



})
