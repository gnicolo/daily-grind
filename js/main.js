























function coffeeTemplate(coffee){
    return`  <p>
                <img src="images/${coffee.pic}" alt="${coffee.alt}" id="coffee" />
            <strong>${coffee.day} Coffee Special:</strong> ${coffee.day} daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}
            </p>`

}


let myDate = new Date () ;
let today = myDate . getDay () ;
let coffee = "";

//use location object to access querystring (address bar)
const queryString = window.location.search;
    
//output to console    
console.log(queryString);
    
//separate querystring parameters
const urlParams = new URLSearchParams(queryString);

if(urlParams.has("day")){//from querystring
    today = urlParams.get("day");
 }

//convert the string to an integer
 today = parseInt(today);
 
switch(today){
    case 1:
        today = "Monday";
        coffee = {
            color:"pink",
            name:"Bubble Tea",
            pic:"bubble-tea.jpg",
            alt:"A picture of a bubble tea",
            day:"Monday",
            desc:'I like  me some bubble tea!'
        };
    break;
   
    case 2:
        today = "Tuesday";
        coffee = {
            color:"brown",
            name:"Caramel latte",
            pic:"caramel-latte.jpg",
            alt:"A picture of a caramel latte",
            day:"Tuesday",
            desc:'Its cold, so a caramel latte sounds good right now!'
        };
    break;

    case 3:
        today = "Wednesday";
        coffee = {
            color:"black",
            name:"Cold Brew",
            pic:"cold-brew.jpg",
            alt:"A picture of a cold brew",
            day:"Wednesday",
            desc:'I need some serious caffeine! Give me a cold brew!'
        };
    break;

    case 4:
        today = "Thursday";
        coffee = {
            color:"green",
            name:"Drip",
            pic:"drip.jpg",
            alt:"A picture of a drip",
            day:"Thursday",
            desc:'Its freezing, so a drip sounds good right now!'
        };
    break;

    case 5:
        today = "Friday";
        coffee = {
            color:"purple",
            name:"Mocha",
            pic:"mocha.jpg",
            alt:"A picture of a mocha",
            day:"Friday",
            desc:'Its freezing, so a mocha sounds good right now!'
        };
    break;

    case 6:
        today = "Saturday";
        coffee = {
            color:"orange",
            name:"Pumpkin Spice Latte",
            pic:"pumpkin-spice-latte.jpg",
            alt:"A picture of a pumpkin spice latte",
            day:"Saturday",
            desc:'Its that time of the year to enjoy  a pumpkin spice latte!'
        };
    break;

    
    default:
        alert("something went wrong!");
}

console. log (coffee) ;

document.getElementById("coffee-template").innerHTML = coffeeTemplate(coffee);
    //Here we are changing the background color of the html tag
    document.querySelector("html").style.backgroundColor = coffee.color;