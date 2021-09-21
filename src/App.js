"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./global.scss");
var react_router_dom_1 = require("react-router-dom");
var react_stripe_js_1 = require("@stripe/react-stripe-js");
var stripe_js_1 = require("@stripe/stripe-js");
var Home_1 = require("./pages/Home");
var Checkout_1 = require("./pages/Checkout");
var Login_1 = require("./pages/Login");
var Payment_1 = require("./pages/Payment");
var useStateProvider_1 = require("./context/useStateProvider");
var firebase_functions_1 = require("./firebase/firebase.functions");
var Success_1 = require("./pages/Success");
var apiKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
var stripePromise = stripe_js_1.loadStripe(apiKey);
var App = function () {
    var dispatch = useStateProvider_1.useState().dispatch;
    react_1["default"].useEffect(function () {
        firebase_functions_1.userState(dispatch);
    }, [dispatch]);
    return (<>
      <react_router_dom_1.BrowserRouter>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route exact component={Home_1.Home} path='/'/>
          <react_router_dom_1.Route component={Checkout_1.Checkout} path='/checkout'/>
          <react_router_dom_1.Route component={Login_1.Login} path='/login'/>
          <react_router_dom_1.Route component={Success_1.Success} path='/success'/>
          <react_stripe_js_1.Elements stripe={stripePromise}>
            <react_router_dom_1.Route component={Payment_1.Payment} path='/payment'/>
          </react_stripe_js_1.Elements>
        </react_router_dom_1.Switch>
      </react_router_dom_1.BrowserRouter>
    </>);
};
exports["default"] = App;
