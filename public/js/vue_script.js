


let vm = new Vue({
    el: '.grid-wrapper',
    data: {
      menu: 
      [{name: "The American Dream", kCal: 1000, img: "img/american_dream.jpg", allergies: ["Gluten", "Lactose"]}, 
      {name: "Bacon Attack", kCal: "1000", img: "img/bacon_attack.jpg", allergies: ["Gluten", "Lactose"]}, 
      {name: "Meatlovers nightmare", kCal: 500, img: "img/vegan_burger.jpg", allergies: ["Gluten", "Lactose"]}] 
    },
    
    methods: {
      printString: function () {
              console.log("Hello world");
        }
    }
  })
  
  