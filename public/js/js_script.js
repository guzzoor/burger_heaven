
// -------------------------------- Functions --------------------------------------
// Did not get for "burger in menu", look it up

function menuItem(n, k, p, a){
    this.name = n;
    this.kCal = k;
    this.picture = p;
    this.allergies = a;
    this.getName = function(){
        return this.name;
    }
    this.getkCal = function(){
        return this.kCal;
    };  
}

/*
    create a div with a h3, img, and an unordered list
    h3: name of burger
    img: picture
    ul: allergies
*/

function createAllergieList(allergies, div){
    
    //let element = document.getElementById("grid-wrapper");

    let list = document.createElement("ul");
    let i = 0;
    for(i; i < allergies.length; i++){
        let li = document.createElement("li");
        li.innerHTML = allergies[i];
        list.appendChild(li);
    }
    div.appendChild(list);
}

function createGridObject(menu, element){
    let i = 0;
    for(i; i < menu.length; i++)
    {   
	    let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let img = document.createElement("img");
        img.src = menu[i].picture;
        h3.innerHTML = menu[i].name;
        let allList = menu[i].allergies
        div.appendChild(h3);
        div.appendChild(img)
        createAllergieList(allList, div);
        element.appendChild(div);   
    }   
}


// --------------------------- Running -------------------------------

let burger1 = new menuItem("The American Dream", 1000, "img/american_dream.jpg", ["Gluten", "Lactose"]);
let burger2 = new menuItem("Bacon Attack", 1500, "img/bacon_attack.jpg", []);
let burger3 = new menuItem("Meatlovers Nightmare", 700, "img/vegan_burger.jpg", ["Gluten"]);


let menu = [burger1, burger2, burger3];
let element = document.getElementById("grid-wrapper");

createGridObject(menu, element);
