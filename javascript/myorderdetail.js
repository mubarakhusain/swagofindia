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

//getting data for my Order track
let resultOfStorage = localStorage.getItem("productDataForTrack");
console.log(resultOfStorage);
let finalProductArray = JSON.parse(resultOfStorage);
// var uniqueData = [...new Set(finalProductArray)];

// var lastProduct = uniqueData[uniqueData.length - 1];
console.log(finalProductArray);
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
  counterItems = 0,
  trackMyOrder = "",
  trackOrderImg = "";

async function loadProducts(wishlistListUrl) {
  fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
    .then((response) => response.json())
    .then((json) => {
      productsList = json;
      productsList.products.forEach((product) => {
        if (finalProductArray.includes(product.id) == true) {
          counterItems++;
          trackOrderImg = "<img src='" + product.url + "'>";
          trackMyOrder =
            "<p>" +
            product.titleProduct +
            "</p>" +
            '<div class="detailOfProductStars">';
          lowStar = 5 - product.rating;
          for (i = 1; i <= product.rating; i++) {
            review += '<i class="fas fa-star"></i>';
          }
          for (i = 1; i <= lowStar; i++) {
            review += '<i class="far fa-star"></i>';
          }
          trackMyOrder += review + product.rating + "/5";
          review = "";
          trackMyOrder +=
            "</div>" +
            '<p class="grayP" id="grayP1">color: Multicolor</p>' +
            '<p class="grayP" id="grayP2">Seller: Indian pvt. ltd.</p>' +
            '<div class="priceOfTrackOrder">' +
            "<p>Rs. <span>" +
            product.priceAfterDisc +
            "</span>/-</p>" +
            "<p>Rs. <span>" +
            product.price +
            "</span>/-</p>" +
            "<p>(60% off)</p>" +
            "</div>";

          totalPrice1 += product.priceAfterDisc;
          grossPrice1 += product.price;
          priceDifference1 += grossPrice1 - totalPrice1;
          document.getElementById("detailOfProduct1").innerHTML = trackOrderImg;
          document.querySelector(".detailOfProduct").innerHTML = trackMyOrder;

          //   document.getElementById("itemsCount").innerHTML = counterItems;

          // removing the product from wishlist
        }
      });
    });
}
loadProducts(wishlistListUrl);
