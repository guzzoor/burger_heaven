

const vm = new Vue({
    el: '#myID',
    data: {
      h: "Burgers",
      menu: [{name: "american dream", kCal: "1000"}, {name: "bacon attack", kCal: "1000"}, 
            {name: "meatlovers nightmare", kCal: "500"}],
    },
    
    methods: {
      printString: function () {
              console.log("Hello world");
    }
    }
  })
  