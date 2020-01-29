
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
        img.src = menu[i].img;
        h3.innerHTML = menu[i].name;
        let allList = menu[i].allergies
        div.appendChild(h3);
        div.appendChild(img)
        createAllergieList(allList, div);
        element.appendChild(div);   
    }   
}

// --------------------------- Running -------------------------------

let menu = food;
let element = document.getElementById("grid-wrapper");
createGridObject(menu, element);


// ---------------------- Button -----------------------

let button = document.getElementById("myButton");
button.onclick = function(){
    let n = document.getElementById("name").value;
    let e = document.getElementById("email").value; 
    let p = document.getElementById("payment").value;
    let g = document.querySelector('input[name=gender]:checked').value;
    let formArr = [n, e, p, g];
    console.log(formArr);
    return formArr;
}


