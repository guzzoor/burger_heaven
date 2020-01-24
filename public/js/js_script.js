
function menuItem(n, k, p){
    this.name = n;
    this.kCal = k;
    this.picture = p;
    this.getName = function(){
        return this.name;
    }
    this.getkCal = function(){
        return this.kCal;
    };  
}

// --------------------------------- Testing ---------------------------------

let burger1 = new menuItem("american dream", 1000, "");
let burger2 = new menuItem("bacon attack", 1500, "");
let burger3 = new menuItem("meatlovers nightmare", 700, "");

b1 = document.getElementById("b1");
b1.innerHTML = burger1.getName();
 
 
b2 = document.getElementById("b2");
b2.innerHTML = burger2.getName();

b3 = document.getElementById("b3");
b3.innerHTML = burger3.getName();



// -------------------------------- Loops --------------------------------------
// Did not get for "burger in menu", look it up

function menuItem(n, k, p){
    this.name = n;
    this.kCal = k;
    this.picture = p;
    this.getName = function(){
        return this.name;
    }
    this.getkCal = function(){
        return this.kCal;
    };  
}

let burger1 = new menuItem("american dream", 1000, "");
let burger2 = new menuItem("bacon attack", 1500, "");
let burger3 = new menuItem("meatlovers nightmare", 700, "");



burgers = [burger1, burger2, burger3];

let menu = [{name: "american dream", kCal: "1000"}, {name: "bacon attack", kCal: "1000"} ,{name: "meatlovers nightmare", kCal: "500"}];

console.log(menu[0].name);

let myElement = document.getElementById("myID");

let i = 0;
for(i; i < menu.length; i++)
{  
	let listItem = document.createElement("li");
	let listValue = document.createTextNode(menu[i].name);
  listItem.appendChild(listValue);
  myElement.appendChild(listItem);   
}

