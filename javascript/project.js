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
let resultOfStorage1 = localStorage.getItem("productData1");

let finalProductArray1 = JSON.parse(resultOfStorage1);
var uniqueData1 = [...new Set(finalProductArray1)];

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
        if (uniqueData1.includes(product.id) == true) {
          counterItems++;
          localStorage.setItem("wishCounter", counterItems);

          wishlistHtml =
            '<div class="row wishlistDiv" id="' +
            product.id +
            '">' +
            "<hr class='hrOfWishlist'>" +
            '<div class="col-3 productImageCard">' +
            '<img src="' +
            product.url +
            '"' +
            'class="" alt="">' +
            "</div>" +
            '<div class="col-9 productDetails" id="productDetails">' +
            '<p class="productTitle">' +
            product.titleProduct +
            "</p>" +
            '<div class="starIcon">';
          lowStar = 5 - product.rating;
          for (i = 1; i <= product.rating; i++) {
            review += '<i class="fas fa-star"></i>';
          }
          for (i = 1; i <= lowStar; i++) {
            review += '<i class="far fa-star"></i>';
          }
          wishlistHtml += review + product.rating;
          review = "";

          wishlistHtml +=
            "</div>" +
            '<div class="priceDetails">' +
            '<p class="finalPrice"><span>' +
            product.priceAfterDisc +
            "</span>/-</p>" +
            '<p class="priceWithoutDis"><span>' +
            product.price +
            "</span>/-</p>" +
            '<p class="priceOffer">(60% off)</p>' +
            "</div>" +
            '<div class="dropdown" id="dropdownProductBtn">' +
            '   <button class="btn btn-secondary dropdown-toggle btn-size-of-prd" type="button"' +
            '       id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
            "      Size: one size" +
            " </button>" +
            '<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
            '<li><a class="dropdown-item" href="#">Size two</a></li>' +
            '<li><a class="dropdown-item" href="#">Size three</a></li>' +
            '<li><a class="dropdown-item" href="#">Size four</a></li>' +
            "</ul>" +
            "</div>" +
            '<div class="" id="addAndRemoveBtn">' +
            '<button type="button" onclick="addToCart()" class="btn btn-default" id="">Add to Cart</button>' +
            '<pre id="preIn"></pre>' +
            '<button type="button" class="btn btn-default" id="removeFromWishlist">Remove from the wishlist </button>' +
            "</div>" +
            "</div>" +
            "</div>";

          totalPrice1 += product.priceAfterDisc;
          grossPrice1 += product.price;
          priceDifference1 += grossPrice1 - totalPrice1;
          document.querySelector("#card-div1").innerHTML += wishlistHtml;
          document.getElementById("itemsCount").innerHTML = counterItems;
          document.getElementById("wishCount").innerHTML = counterItems;

          document.getElementById("CartCount").innerHTML = localStorage.getItem(
            "totalProducts"
          );
          // removing the product from wishlist
          document
            .querySelectorAll('[id^="productCard"]')
            .forEach((productCard) => {
              productCard.childNodes[2].childNodes[4].childNodes[2].addEventListener(
                "click",
                () => {
                  $(productCard).fadeOut(1200, function () {
                    $(this).remove();
                    counterItems--;
                    localStorage.setItem("wishCounter", counterItems);
                    document.getElementById(
                      "wishCount"
                    ).innerHTML = counterItems;
                    document.getElementById(
                      "itemsCount"
                    ).innerHTML = counterItems;
                    if (uniqueData1.includes(productCard.id) == true) {
                      var productRemoveIndex = uniqueData1.indexOf(
                        productCard.id
                      );
                      uniqueData1.splice(productRemoveIndex, 1);

                      //setting local storage

                      localStorage.setItem(
                        "productData1",
                        JSON.stringify(uniqueData1)
                      );
                    }
                    // localStorage.removeItem("productData1");
                    // console.log(localStorage.getItem("productData1"));
                  });
                }
              );
            });
        }
      });
    });
}
loadProducts(wishlistListUrl);

//storing the data on click of add to cart button
let productArray = [];
let productFinalArray = [];
let addToCart = () => {
  document.querySelectorAll('[id^="productCard"]').forEach((productCard) => {
    productCard.childNodes[2].childNodes[4].childNodes[0].addEventListener(
      "click",
      () => {
        let productId = productCard.id;
        if (productArray.includes(productId) == false) {
          productArray.push(productId);
          localStorage.setItem("productData", JSON.stringify(productArray));
        }
        //retrive the ids
      }
    );
  });
};

// displaying the cart value
