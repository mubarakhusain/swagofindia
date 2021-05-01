//go to review tab end

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//how to show back to top button when user scrolls more than 150 pixels down from top of document.

var toTopButton = document.querySelector(".go-to-top img");
toTopButton.style.display = "none"; //by default should be hidden
document.querySelector("body").onscroll = function () {
  //whenever they scroll
  if (window.scrollY > 150)
    //if scroll is 150px from top
    toTopButton.style.display = "block";
  //if they scroll down, show
  else toTopButton.style.display = "none"; //if they scroll up, hide
};

// THIS BLOCK IS THE CONTACT NUMBER CHANGE
let countryInfo = new Map();
countryInfo.set("india", "+919999999");
countryInfo.set("usa", "+928888888");
countryInfo.set("canada", "+937777777");

var test = document
  .getElementById("form-select")
  .addEventListener("change", () => {
    document.getElementById("contact").innerHTML = countryInfo.get(
      document.getElementById("form-select").value
    );
  });
// THIS BLOCK IS THE CONTACT NUMBER CHANGE END
// STICKY NAVIGATION BAR
const nav = document.querySelector("#my-container-2");
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {
    nav.classList.add("fixed");
  } else {
    nav.classList.remove("fixed");
  }
}

window.addEventListener("scroll", fixedNav);

// THIS BLOCK IS FOR THE FLAG CHANGE
// var flagImages = ['https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa', 'https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa', 'https://www.flaticon.com/svg/vstatic/svg/555/555462.svg?token=exp=1614098136~hmac=ecaa1160e546a75c595aecd45c3b18fa'];
var country = document
  .getElementById("form-select")
  .addEventListener("change", () => {
    let country = document.getElementById("form-select").value;
    document.getElementById("contact").innerHTML = countryInfo.get(country);

    var flagChange = document.getElementById("flag-1");
    if ((flagChange.src = country == "india")) {
      flagChange.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/india%20(1).png";
    } else if ((flagChange.src = country == "usa")) {
      flagChange.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/united-states.png";
    } else {
      flagChange.src =
        "https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/canada.png";
    }
  });
//receving data from local storage.
let resultOfStorage = localStorage.getItem("productData");

let finalProductArray = JSON.parse(resultOfStorage);
var uniqueData = [...new Set(finalProductArray)];
console.log(uniqueData);

//populating the wishlist cart using the JSON data
let wishlistListUrl =
  "https://my-json-server.typicode.com/mubarakhusain/fakeserver/db";
let wishlistData = "";
let productJsonData = "",
  wishlistHtml,
  totalPrice1,
  grossPrice1,
  priceDifference1,
  lowStar,
  review = "",
  counterItems = 0;

async function loadProducts(wishlistListUrl) {
  fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
    .then((response) => response.json())
    .then((json) => {
      productsList = json;
      productsList.products.forEach((product) => {
        if (uniqueData.includes(product.id) == true) {
          counterItems++;

          wishlistHtml =
            '<div class=" row myOrderRow" id="' +
            product.id +
            '">' +
            '<div class="col-3 productImageCard" id="imageUpdate">' +
            '<img src="' +
            product.url +
            '"' +
            'class="" alt="">' +
            "</div>" +
            '<div class="col-3 nameAndDetails">' +
            "<p class='productTitle1'>" +
            product.titleProduct +
            "</p>" +
            "<p class='grayP1'>Color: White</p>" +
            "<p class='grayP1'>Seller: Indian fashion pvt ltd.</p>" +
            "</div>" +
            '<div class="col-2 priceOfOrder">' +
            '<p>Rs. <span id="">' +
            product.priceAfterDisc +
            "</span>/-</p>" +
            "</div>" +
            '<div class="col-4 statusOfOrder">' +
            "<div>" +
            '<img src="https://raw.githubusercontent.com/mubarakhusain/images-for-website-skilllync/main/Ellipse%2032%402x.png" width="10px" alt="">' +
            "<p>Delivery expected by March 23</p>" +
            "</div>" +
            "<p>Your has been placed</p>" +
            '<p><a onclick="trackMe()" id="trackOrderA"' +
            product.id +
            '" href="myorderdetails.html">TACK YOUR ORDER</a></p>' +
            "</div>";
          (" </div>");

          totalPrice1 += product.priceAfterDisc;
          grossPrice1 += product.price;
          priceDifference1 += grossPrice1 - totalPrice1;
          document.querySelector("#card-div2").innerHTML += wishlistHtml;
          //   document.getElementById("itemsCount").innerHTML = counterItems;

          // removing the product from wishlist
        }
      });
    });
}
loadProducts(wishlistListUrl);

//storing the data on click of add to cart button
let productArray = [];

let addToCart = () => {
  document.querySelectorAll('[id^="productCard"]').forEach((productCard) => {
    productCard.childNodes[2].childNodes[4].childNodes[0].addEventListener(
      "click",
      () => {
        var productId = productCard.id;
        if (productArray.includes(productId) == false) {
          productArray.push(productId);
          localStorage.setItem("productData", JSON.stringify(productArray));
        }

        //retrive the ids
      }
    );
  });
};

//My order page to My order details//
let orderDetail = "";
let trackMe = () => {
  document.querySelectorAll('[id^="productCard"]').forEach((productCard) => {
    productCard.childNodes[3].childNodes[2].addEventListener("click", () => {
      var productId1 = productCard.id;
      if (orderDetail.includes(productId1) == false) {
        orderDetail = [productId1];
        localStorage.setItem(
          "productDataForTrack",
          JSON.stringify(orderDetail)
        );
      } else if (orderDetail.includes(productId1) == true) {
        orderDetail = orderDetail - 1;
        orderDetail = [productId1];
        localStorage.setItem(
          "productDataForTrack",
          JSON.stringify(orderDetail)
        );
      }
      console.log(orderDetail);
      console.log(localStorage.getItem("productDataForTrack"));
      //retrive the ids
    });
  });
};
