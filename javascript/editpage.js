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
//storing the data of form from Edit profile page.
let phoneNumber = 0,
  nameData = 0,
  emailData = "",
  birthdayData = "",
  altNumberData = 0,
  locationData = "",
  nickNameData = "",
  counting = 0;

storingData = () => {
  counting = counting + 1;
  phoneNumber = document.getElementById("exampleFormControlInput1").value;
  localStorage.setItem("phoneNo", phoneNumber);
  nameData = document.getElementById("exampleFormControlInput2").value;
  localStorage.setItem("nameStorage", nameData);
  emailData = document.getElementById("exampleFormControlInput3").value;
  localStorage.setItem("emailStorage", emailData);
  birthdayData = document.getElementById("exampleFormControlInput4").value;
  localStorage.setItem("birthdayStorage", birthdayData);
  locationData = document.getElementById("exampleFormControlInput5").value;
  localStorage.setItem("locationStorage", locationData);
  altNumberData = document.getElementById("exampleFormControlInput6").value;
  localStorage.setItem("altNumberStorage", altNumberData);
  nickNameData = document.getElementById("exampleFormControlInput7").value;
  localStorage.setItem("nicknameStorage", nickNameData);

  if (localStorage.getItem("phoneNo") !== null) {
    document.getElementById(
      "exampleFormControlInput1"
    ).value = localStorage.getItem("phoneNo");
  }
  if (localStorage.getItem("nameStorage") !== null) {
    document.getElementById(
      "exampleFormControlInput2"
    ).value = localStorage.getItem("nameStorage");
  }
  if (localStorage.getItem("emailStorage") !== null) {
    document.getElementById(
      "exampleFormControlInput3"
    ).value = localStorage.getItem("emailStorage");
  }
  if (localStorage.getItem("birthdayStorage") !== null) {
    document.getElementById(
      "exampleFormControlInput4"
    ).value = localStorage.getItem("birthdayStorage");
  }
  if (localStorage.getItem("locationStorage") !== null) {
    document.getElementById(
      "exampleFormControlInput5"
    ).value = localStorage.getItem("locationStorage");
  }
  if (localStorage.getItem("altNumberStorage") !== null) {
    document.getElementById(
      "exampleFormControlInput6"
    ).value = localStorage.getItem("altNumberStorage");
  }
  if (localStorage.getItem("nicknameStorage") !== null) {
    document.getElementById(
      "exampleFormControlInput7"
    ).value = localStorage.getItem("nicknameStorage");
  }

  //change the name on my profile page
};

// console.log(localStorage.getItem("phoneNo"));
// console.log(localStorage.getItem("nameStorage"));
// console.log(localStorage.getItem("emailStorage"));
// console.log(localStorage.getItem("birthdayStorage"));
// console.log(localStorage.getItem("locationStorage"));
// console.log(localStorage.getItem("altNumberStorage"));
// console.log(localStorage.getItem("nicknameStorage"));

//change the name on my profile
document.getElementById("hrefName").innerHTML = localStorage.getItem(
  "nameStorage"
);
document.getElementById("hrefEmail").innerHTML = localStorage.getItem(
  "emailStorage"
);

//click of gender btn

femaleFn = () => {
  femaleGender = "true";
  localStorage.setItem("gender", femaleGender);
  console.log(localStorage.getItem("gender"));
};
maleFn = () => {
  femaleGender = "false";
  localStorage.setItem("gender", femaleGender);
  console.log(localStorage.getItem("gender"));
};
//gender code
if (localStorage.getItem("gender") == "true") {
  document.getElementById("genderP").innerHTML = "Female";
} else if (localStorage.getItem("gender") == "false") {
  document.getElementById("genderP").innerHTML = "Male";
} else if (localStorage.getItem("gender") == null) {
  document.getElementById("genderP").innerHTML = "Male";
}

//changing the value of my profile page.
if (counting >= 0) {
  counting--;
  document.getElementById("emailP").innerHTML = localStorage.getItem(
    "emailStorage"
  );
  document.getElementById("birthP").innerHTML = localStorage.getItem(
    "birthdayStorage"
  );
  document.getElementById("locP").innerHTML = localStorage.getItem(
    "locationStorage"
  );
  document.getElementById("altnumP").innerHTML = localStorage.getItem(
    "altNumberStorage"
  );
  document.getElementById("nickP").innerHTML = localStorage.getItem(
    "nicknameStorage"
  );
  document.getElementById("numberP").innerHTML = localStorage.getItem(
    "phoneNo"
  );
  document.getElementById("nameP").innerHTML = localStorage.getItem(
    "nameStorage"
  );
}
document.getElementById("wishCount1").innerHTML = localStorage.getItem(
  "wishCounter"
);
document.getElementById("cartCountProduct1").innerHTML = localStorage.getItem(
  "totalProducts"
);
