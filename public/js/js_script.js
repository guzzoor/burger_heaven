
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