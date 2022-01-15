console.log("------------------ Questeion 1 ------------------");
// You are creating an ecommerce application selling products online. 
// Some of the products are no longer in stock, and the user must be made aware of this.

let outOfStock = true;

if (outOfStock === true) {
    console.log("Out of stock");
} else if (outOfStock !== true) {
    console.log("In stock");
}

console.log("------------------ Questeion 2 ------------------");
// Create a `for loop` that counts from 15 to 25. 
// Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.

for (let i = 15; i <= 25; i++) {
    if(i === 17 || 20) {
        console.log(i);
    }
}

console.log("------------------ Questeion 3 ------------------");
// You are creating an online game comparison website. When provided with a list of games, these should be displayed to the user.

// Loop through the array below and add an `li` item to the `ul` element in the HTML containing the `title` and `rating` of each game only if the `rating` for the game is below `3.5`.

// If a game is unrated, exclude it from the list.

let games = [
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
       const rating = games[i].rating;

   }


   console.log("------------------ Questeion 4 ------------------");
   console.log("------------------ Questeion 5 ------------------");
   console.log("------------------ Questeion 6 ------------------");
// Select the button with the class `page`.
// When the button is clicked do the following:

//- Change the title of the page (the value of the title element in the head) to "Updated title".
//- Change the background colour of the whole page to "yellow".
//- Change the color of the `h1` element to "green".
//- Change the `h1` element's font to "impact".
//- Change the value of the `h1` element to be a link.
//- Remove the list style and padding from the `ul` element.

const btn1 = document.querySelector(".page")
const title = document.querySelector("meta.title");
const body = document.querySelector("body");
const heading = document.querySelector("h1");


function changeOne() {
    // title.innerHTML = "Update title";
    body.style.backgroundColor = "yellow";
    heading.style.color = "green";
    heading.style.fontFamily = "impact";

}
btn1.onclick = changeOne;



   console.log("------------------ Questeion 7 ------------------");
