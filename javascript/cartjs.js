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

let productListUrl =
  "https://my-json-server.typicode.com/mubarakhusain/fakeserver/db";

let totalPrice = 0,
  grossPrice = 0,
  priceDifference = 0,
  productPriceCard,
  abc = [],
  counterArray = [],
  productIdArray = [],
  productsList,
  counter = 0,
  cartCounter = 0,
  test101 = "";

async function loadProducts(productListUrl) {
  fetch("https://my-json-server.typicode.com/mubarakhusain/fakeserver/db")
    .then((response) => response.json())
    .then((json) => {
      productsList = json;
      productsList.products.forEach((product) => {
        if (uniqueData.includes(product.id) == true) {
          //   counterArray.push(product.id);

          counter++;
          cartCounter++;
          htmlReturn =
            '<div id="' +
            product.id +
            '">' +
            '<div class="cardOfProduct" id="">' +
            '<div class="Productimg">' +
            '  <img src="' +
            product.url +
            '"' +
            '       class="" alt="Product-1">' +
            "</div>" +
            '<div class="informationOfProduct">' +
            "  <p>" +
            product.titleProduct +
            "</p>" +
            " <p>color : white </p>" +
            "  <p>Sold by: The Designer private limited</p>" +
            '  <div class="btn-size-qty">' +
            '<div class="dropdown">' +
            '<button class="btn btn-secondary dropdown-toggle btn-size-of-prd" type="button"' +
            '    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
            "     Size: one size" +
            " </button>" +
            '   <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
            '        <li><a class="dropdown-item" href="#">Size two</a></li>' +
            '         <li><a class="dropdown-item" href="#">Size three</a></li>' +
            '          <li><a class="dropdown-item" href="#">Size four</a></li>' +
            "       </ul>" +
            "    </div>" +
            '     <div class="dropdown">' +
            '          <button class="btn btn-secondary dropdown-toggle btn-qty" type="button"' +
            '               id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">' +
            "                QTY: 1" +
            "             </button>" +
            '              <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">' +
            '                   <li><a class="dropdown-item" href="#"><span onclick="" id="twoQty">2</span></a></li>' +
            '                    <li><a class="dropdown-item" href="#"><span id="threeQty">3</span</a></li>' +
            '                     <li><a class="dropdown-item" href="#"><span id="fourQty">4</span></a></li>' +
            "                  </ul>" +
            "               </div>" +
            "            </div>" +
            "        </div>" +
            '        <div class="finalPriceWithOffer">' +
            "            <p>Rs. <span>" +
            product.priceAfterDisc +
            "</span></p>" +
            '            <div class="price-n-offer">' +
            "                <p>Rs. <span>" +
            product.price +
            "</span></p>" +
            "                <P>(60% OFF)</P>" +
            "            </div>" +
            "            <p>Delivery in 4-6 days</p>" +
            "        </div>" +
            "   </div>" +
            '    <div class="sideCard">' +
            '         <button onclick="" type="button" class="btn btn-primary" id="removeBtn">Remove</button>' +
            "        <pre></pre>" +
            '      <button type="button" class="btn btn-primary" id="AddWishlistBtn">Move To Wishlist</button>' +
            "    </div>";
          ("</div>");
          totalPrice += product.priceAfterDisc;
          grossPrice += product.price;
          priceDifference += grossPrice - totalPrice;
          document.querySelector("#appendProduct").innerHTML += htmlReturn;

          //removing the products from the list.

          document
            .querySelectorAll('[id^="productCard"]')
            .forEach((productCard) => {
              productCard.childNodes[2].childNodes[1].addEventListener(
                "click",
                () => {
                  $(productCard).fadeOut(1200, function () {
                    $(this).remove();
                  });
                  productCard.remove();
                  if (uniqueData.includes(productCard.id) == true) {
                    console.log(productCard.id);

                    var productRemoveIndex = uniqueData.indexOf(productCard.id);
                    uniqueData.splice(productRemoveIndex, 1);

                    //setting local storage

                    localStorage.setItem(
                      "productData",
                      JSON.stringify(uniqueData)
                    );
                  }
                  cartCounter--;
                  counter--;

                  var finalPriceOfCard =
                    productCard.childNodes[0].childNodes[3].childNodes[1]
                      .childNodes[1].childNodes[0].data;
                  var strikeOfPrice =
                    productCard.childNodes[0].childNodes[3].childNodes[3]
                      .childNodes[1].childNodes[1].childNodes[0].data;

                  totalPrice = totalPrice - finalPriceOfCard;

                  grossPrice = grossPrice - strikeOfPrice;

                  document.getElementById(
                    "totalCostSpan"
                  ).innerHTML = totalPrice;
                  document.getElementById("totalProducts").innerHTML = counter;
                  document.getElementById("grossPrice").innerHTML = grossPrice;
                  document.getElementById(
                    "differenceId"
                  ).innerHTML = priceDifference;
                  document.getElementById(
                    "totalPriceId"
                  ).innerHTML = totalPrice;
                  document.getElementById(
                    "totalPriceId2"
                  ).innerHTML = totalPrice;
                  document.getElementById(
                    "cartCountProduct"
                  ).innerHTML = cartCounter;
                }
              );
            });
        }
      });

      localStorage.setItem("totalPrice", totalPrice);
      localStorage.setItem("PriceDiscount", priceDifference);
      localStorage.setItem("grossPrice", grossPrice);
      localStorage.setItem("totalProducts", counter);
      document.getElementById("totalCostSpan").innerHTML = totalPrice;
      document.getElementById("totalProducts").innerHTML = counter;
      document.getElementById("grossPrice").innerHTML = grossPrice;
      document.getElementById("differenceId").innerHTML = priceDifference;
      document.getElementById("totalPriceId").innerHTML = totalPrice;
      document.getElementById("totalPriceId2").innerHTML = totalPrice;
      document.getElementById("cartCountProduct").innerHTML = cartCounter;
    });
}
loadProducts(productListUrl);

document.getElementById("wishCount").innerHTML = localStorage.getItem(
  "wishCounter"
);
