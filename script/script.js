'use strict';
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// creation of array where all content is pushed into
var arr = [];
//creation of parent class Locations
var Locations = /** @class */ (function () {
    function Locations(a, b, c, d, e, f, g) {
        this.category = '';
        this.name = '';
        this.city = '';
        this.ZipCode = '';
        this.address = '';
        this.image = '';
        this.visited = '';
        this.category = a;
        this.name = b;
        this.city = c;
        this.ZipCode = d;
        this.address = e;
        this.image = f;
        this.visited = g;
        // all content pushed into array
        arr.push(this);
    }
    // define what should ne displayed
    Locations.prototype.render = function () {
        return "<div class=\"card col-10 col-md-5 col-lg-3 pl-0 mt-5 mb-5 shadow bg-white rounded\">\n    <img class=\"card-img-top m-2 d-none d-md-inline\" src=\"" + this.image + "\" alt=\"Card image cap\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\"><span class=\" text-success\">" + this.category + ":<br><br></span> " + this.name + "</h5>\n      <p class=\"card-text d-none d-md-inline\">" + this.address + ", " + this.ZipCode + "," + this.city + "<hr class=\"d-none d-md-inline\">\n        </p>\n        <p class=\"card-text\">Created: " + this.visited + "</p>\n    </div>\n  </div> ";
    };
    return Locations;
}());
// extending the parnet class Locations with the class Restaurants
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(a, b, c, d, e, f, g, h, j, k) {
        var _this = _super.call(this, a, b, c, d, e, f, g) || this;
        _this.phoneNumber = h;
        _this.cuisineType = j;
        _this.webAddress = k;
        return _this;
    }
    Restaurant.prototype.render = function () {
        return " <div class=\"card col-10 col-md-5 col-lg-3  pl-0 mt-5 mb-5 shadow bg-white rounded\">\n  <img class=\"card-img-top m-2 d-none d-md-inline \" src=\"" + this.image + "\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\"><span class=\" text-danger\">" + this.category + ":<br><br></span> " + this.name + "</h5>\n    <p class=\"card-text d-none d-md-inline\">  " + this.address + ", " + this.ZipCode + "," + this.city + "<hr class=\"d-none d-md-inline\">\n        </p>\n        <p class=\"card-text d-none d-lg-inline\">   <br>  For reservation call: " + this.phoneNumber + " <br> We serve: " + this.cuisineType + "<br>Check out our menu: <a href=\"" + this.webAddress + "\">" + this.webAddress + "</a>\n        </p>\n  </div> \n</div> \n  ";
    };
    return Restaurant;
}(Locations));
// extending the parnet class Locations with the class Events
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(a, b, c, d, e, f, g, h, j, k, l) {
        var _this = _super.call(this, a, b, c, d, e, f, g) || this;
        _this.eventDate = h;
        _this.eventTime = j;
        _this.ticketPrice = k;
        _this.webAddress = l;
        return _this;
    }
    Events.prototype.render = function () {
        return " <div class=\"card col-10 col-md-5 col-lg-3 pl-0 mt-5 mb-5 shadow bg-white rounded\">\n  <img class=\"card-img-bottom m-2 d-none d-md-inline \" src=\"" + this.image + "\" alt=\"Card image cap\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\"><span class=\" text-warning\">" + this.category + ":<br><br></span> " + this.name + "</h5>\n    <p class=\"card-text d-none d-md-inline \">Location: " + this.address + ", " + this.ZipCode + "," + this.city + " <br>Date and Time: " + this.eventDate + ", " + this.eventTime + "<hr class=\"d-none d-md-inline\">\n        </p>\n        <p class=\"card-text d-none d-lg-inline\">   <br> Buy tickets here: <a href=\"" + this.webAddress + "\">" + this.webAddress + "</a> <br>Ticket prices start from: " + this.ticketPrice + "\n        </p>\n  </div> \n</div> \n  ";
    };
    return Events;
}(Locations));
// creation of content for each card
var display = new Locations('Location', 'St.Charles Church', 'Vienna', '1010', 'Karlsplatz 1', 'img/palace.jpg', '24.03.2019 12:45');
new Locations('Location', 'Zoo Vienna', 'Vienna', '1130', 'Maxingstraße 13b', 'img/zoo.jpg', '24.03.2019 16:45');
var display1 = new Restaurant('Restaurant', 'Lemon Leaf Thai Restaurant', 'Vienna', '1050', 'Kettenbrückengasse 19', 'img/thai.jpg', 'visited', '+43(1)5812308', 'Thai cuisine', 'https://www.lemonleaf.at');
new Restaurant('Restaurant', 'SIXTA', 'Vienna', '1050', 'Schönbrunner Straße 21', 'img/restaurant.jpg', 'visited', '+43 1 58 528 56 l +43 1 58 528 56', 'Austrian cuisine', 'http://www.sixta-restaurant.at/');
var display2 = new Events('Event', 'Kris Kristofferson', 'Vienna', '1150', 'Wiener Stadthalle, Halle F, Roland Rainer Platz 1', 'img/kris.jpg', 'visited', 'Fr., 15.11.2021.', '20:00', '58,50 EUR', 'http://kriskristofferson.com/');
new Events('Event', 'Lenny Kravitz', 'Vienna', '1150', 'Wiener Stadthalle - Halle D, Roland Rainer Platz 1', 'img/lenny.jpg', 'visited', 'Sat, 09.12.2029', '19:30', '€ 47,80', 'https://www.lennykravitz.com/');
// creation of loop to fill HTML with content
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    document.getElementById('result').innerHTML += "" + i.render();
}
