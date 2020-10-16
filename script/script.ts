'use strict';
// creation of array where all content is pushed into
let arr = [];
//creation of parent class Locations
class Locations {
  category = '';
  name= '';
  city= '';
  ZipCode= '';
  address= '';
  image= '';
  visited= '';
  constructor(a, b, c, d,e,f,g){
    this.category = a;
    this.name= b;
    this.city = c;
    this.ZipCode = d;
    this.address = e ;
    this.image = f;
    this.visited= g;

// all content pushed into array
    arr.push(this);
  }
  // define what should ne displayed
  render (){
    return `<div class="card col-10 col-md-5 col-lg-3 pl-0 mt-5 mb-5 shadow bg-white rounded">
    <img class="card-img-top m-2 d-none d-md-inline" src="${this.image}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title"><span class=" text-success">${this.category}:<br><br></span> ${this.name}</h5>
      <p class="card-text d-none d-md-inline">${this.address}, ${this.ZipCode},${this.city}<hr class="d-none d-md-inline">
        </p>
        <p class="card-text">Created: ${this.visited}</p>
    </div>
  </div> `
  }
}
// extending the parnet class Locations with the class Restaurants
class Restaurant extends Locations {
  phoneNumber;
  cuisineType;
  webAddress;
constructor(a,b,c,d,e,f,g,h,j,k){
  super(a,b,c,d,e,f,g);
  this.phoneNumber = h;
  this.cuisineType = j;
  this.webAddress = k;
}
render() {
  return ` <div class="card col-10 col-md-5 col-lg-3  pl-0 mt-5 mb-5 shadow bg-white rounded">
  <img class="card-img-top m-2 d-none d-md-inline " src="${this.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><span class=" text-danger">${this.category}:<br><br></span> ${this.name}</h5>
    <p class="card-text d-none d-md-inline">  ${this.address}, ${this.ZipCode},${this.city}<hr class="d-none d-md-inline">
        </p>
        <p class="card-text d-none d-lg-inline">   <br>  For reservation call: ${this.phoneNumber} <br> We serve: ${this.cuisineType}<br>Check out our menu: <a href="${this.webAddress}">${this.webAddress}</a>
        </p>
  </div> 
</div> 
  `;
}
}
// extending the parnet class Locations with the class Events
class Events extends Locations {
  eventDate;
  eventTime;
  ticketPrice;
  webAddress;
constructor(a,b,c,d,e,f,g,h,j,k,l){
  super(a,b,c,d,e,f,g);
  this.eventDate = h;
  this.eventTime = j;
  this.ticketPrice = k;
  this.webAddress = l;
}
render() {
  return ` <div class="card col-10 col-md-5 col-lg-3 pl-0 mt-5 mb-5 shadow bg-white rounded">
  <img class="card-img-bottom m-2 d-none d-md-inline " src="${this.image}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><span class=" text-warning">${this.category}:<br><br></span> ${this.name}</h5>
    <p class="card-text d-none d-md-inline ">Location: ${this.address}, ${this.ZipCode},${this.city} <br>Date and Time: ${this.eventDate}, ${this.eventTime}<hr class="d-none d-md-inline">
        </p>
        <p class="card-text d-none d-lg-inline">   <br> Buy tickets here: <a href="${this.webAddress}">${this.webAddress}</a> <br>Ticket prices start from: ${this.ticketPrice}
        </p>
  </div> 
</div> 
  `
}
}
// creation of content for each card
let display = new Locations(
  'Location',
  'St.Charles Church',
  'Vienna',
  '1010',
  'Karlsplatz 1',
  'img/palace.jpg',
  '24.03.2019 12:45',
);
new Locations(
  'Location',
  'Zoo Vienna',
  'Vienna',
  '1130',
  'Maxingstraße 13b',
  'img/zoo.jpg',
  '24.03.2019 16:45',
);
let display1 = new Restaurant(
  'Restaurant',
  'Lemon Leaf Thai Restaurant',
  'Vienna',
  '1050',
  'Kettenbrückengasse 19',
  'img/thai.jpg',
  'visited',
  '+43(1)5812308',
  'Thai cuisine',
  'https://www.lemonleaf.at',
);
new Restaurant(
  'Restaurant',
  'SIXTA',
  'Vienna',
  '1050',
  'Schönbrunner Straße 21',
  'img/restaurant.jpg',
  'visited',
  '+43 1 58 528 56 l +43 1 58 528 56',
  'Austrian cuisine',
  'http://www.sixta-restaurant.at/',
);
let display2 = new Events(
  'Event',
  'Kris Kristofferson',
  'Vienna',
  '1150',
  'Wiener Stadthalle, Halle F, Roland Rainer Platz 1',
  'img/kris.jpg',
  'visited',
  'Fr., 15.11.2021.',
  '20:00',
  '58,50 EUR',
  'http://kriskristofferson.com/',
);
  new Events ('Event',
  'Lenny Kravitz',
  'Vienna',
  '1150',
  'Wiener Stadthalle - Halle D, Roland Rainer Platz 1',
  'img/lenny.jpg',
  'visited',
  'Sat, 09.12.2029',
  '19:30',
  '€ 47,80',
  'https://www.lennykravitz.com/',
);

// creation of loop to fill HTML with content
for (let i of arr) {
  document.getElementById('result').innerHTML += `${i.render()}`; 
}


