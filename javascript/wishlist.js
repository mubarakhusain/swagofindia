let resultOfStorage = localStorage.getItem("productData1");

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
          console.log("hey");
        }
      });
    });
}
loadProducts(wishlistListUrl);
