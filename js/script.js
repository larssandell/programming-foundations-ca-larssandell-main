console.log("------------------ Questeion 1 ------------------");
// You are creating an ecommerce application selling products online. 
// Some of the products are no longer in stock, and the user must be made aware of this.

let outOfStock = true;

if (outOfStock) {
    console.log("Out of stock");
} else {
    console.log("In stock");
}

console.log("------------------ Questeion 2 ------------------");
// Create a `for loop` that counts from 15 to 25. 
// Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

for (let i = 15; i <= 25; i++) {
    if(i === 17 || i === 20) {
        console.log(i);
    }
}

console.log("------------------ Questeion 3 ------------------");
// You are creating an online game comparison website. When provided with a list of games, these should be displayed to the user.

// Loop through the array below and add an `li` item to the `ul` element in the HTML containing the `title` and `rating` of each game only if the `rating` for the game is below `3.5`.

// If a game is unrated, exclude it from the list.

 const games = [
     {
      title: "Grand Theft Auto",
      rating: 4.48,
     },
     {
      title: "Portal 2",
      rating: 3.5,
     },
     {
      title: "Team Fortress",
      rating: null,
     },
     {
      title: "The Witcher",
      rating: 3.0,
     },
     {
      title: "The Elder Scrolls",
      rating: 2.9,
     },
    ];

    for(let i = 0; i < games.length; i++) {
     const gameTitle = games[i].title;
     const rate = games[i].rating;
     if (rate < 3.5 && rate !== null){
         document.querySelector(".games").innerHTML += "<li>" + gameTitle + "; " + rate + "</li>";
     }
 }


   console.log("------------------ Questeion 4 ------------------");
   // Create a function called `whatIDontLike` that accepts one argument. Choose a good name for the argument.
   // Inside the function, check if the argument has a string value. If it doesn't log the message "Please send in a string".
   // If the argument is a string value, log the message `"I don't like "` together with the argument.
   // Call the function and pass in a value of your choice.
function whatIDontLike(stringValue) {
    if (typeof stringValue === "string") {
        console.log("What i don't like " + stringValue);
      } else if (typeof value !== true) {
        console.log("Please send in a String");
      }
    }

whatIDontLike("tudelu");
whatIDontLike(2);
whatIDontLike(true);
whatIDontLike(null);


   console.log("------------------ Questeion 5 ------------------");


function subFunction(num1, num2) {
    const convertNum1 = parseInt(num1);
    const convertNum2 = parseInt(num2);

    if (isNaN(convertNum1) || isNaN(convertNum2)) {
        return "Invalid Argument";
    } else {
      return convertNum1 - convertNum2;
    }
}

document.getElementById("subtraction").innerHTML = subFunction(1, 42);
// document.getElementById("subtraction").innerHTML = subFunction(200, 150);
// document.getElementById("subtraction").innerHTML = subFunction(10, "50");
// document.getElementById("subtraction").innerHTML = subFunction("100", "400");
// document.getElementById("subtraction").innerHTML = subFunction("Ten", "One Hundred");
// document.getElementById("subtraction").innerHTML = subFunction(null, 123);


   console.log("------------------ Questeion 6 ------------------");
// Select the button with the class `page`.
// When the button is clicked do the following:

//- Change the title of the page (the value of the title element in the head) to "Updated title". ok
//- Change the background colour of the whole page to "yellow". ok 
//- Change the color of the `h1` element to "green". ok
//- Change the `h1` element's font to "impact". ok
//- Change the value of the `h1` element to be a link.
//- Remove the list style and padding from the `ul` element.

const btn1 = document.querySelector(".page");
const btn2 = document.querySelector(".price");
const gameList = document.querySelector(".games");
const myHref = document.createElement("a");
const heading = document.querySelector("h1");

function changeOne() {
    document.title = "Updated title";
    document.body.style.backgroundColor = "yellow";
    document.querySelector("h1").style.color = "green";
    document.querySelector("h1").style.fontFamily = "impact";
    document.querySelector(".games").style.listStyleType = "none"; 
    document.querySelector(".games").style.padding = "0";
    document.querySelector("h1").innerHTML = 
    `<a href="#">Progamming Foundations Course Assigment</a>`;
    console.log(changeOne);
	// riktig måte
	//heading.innerHTML = `<a href="#">${heading.textContent}</a>`;

}
btn1.onclick = changeOne;



   console.log("------------------ Questeion 7 ------------------");
// Select the button with the class `price`.
// When the button is clicked, loop through the array below, 
// add all the prices and assign the total to be the innerHTML value of the element with the id `total`.



   let toys = [
    {
     name: "Lego",
     price: 15.6,
    },
    {
     name: "Master of the Universe",
     price: "28.3",
    },
    {
     name: "Barbie",
     price: null,
    },
    {
     name: "Mr Potato Head",
     price: 89.99,
    },
   ];   

function totalPrice() {
    let total = 0;
    for(let i = 0; i < toys.length; i++) {
        const toyPrice = toys[i].price;
        let toyPriceConv = parseFloat(toys[i].price);

    if(!isNaN(toyPriceConv)) {
        total += toyPriceConv;
    }
    }
    document.getElementById("total").innerHTML = total;
}
btn2.onclick = totalPrice;