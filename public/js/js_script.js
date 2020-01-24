
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

console.log(burger1.getkCal());
console.log(burger2.getkCal());
console.log(burger3.getkCal());