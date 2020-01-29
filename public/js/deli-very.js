/* jslint es6:true, indent: 2 */
/* global Vue, io */
/* exported vm */
'use strict';
const socket = io();

/* eslint-disable-next-line no-unused-vars */
const vm = new Vue({
  el: '#vue-wrapper',
  data: {
    isHidden: true,
    mapInfo: {},
    currentOrder: {},
    orders: {},
    menu: food,
    currentOrderData: {
      name: null,
      email: null,
      payment: null,
      gender: null,
      orderedBurger: [],
    },
  },
  created: function() {
    /* When the page is loaded, get the current orders stored on the server.
     * (the server's code is in app.js) */
    socket.on('initialize', function(data) {
      this.orders = data.orders;
    }.bind(this));

    /* Whenever an addOrder is emitted by a client (every open map.html is
     * a client), the server responds with a currentQueue message (this is
     * defined in app.js). The message's data payload is the entire updated
     * order object. Here we define what the client should do with it.
     * Spoiler: We replace the current local order object with the new one. */
    socket.on('currentQueue', function(data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function() {
      /* This function returns the next available key (order number) in
       * the orders object, it works under the assumptions that all keys
       * are integers. */
      let lastOrder = Object.keys(this.orders).reduce(function(last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function(event) {
      /* When you click in the map, a click event object is sent as parameter
       * to the function designated in v-on:click (i.e. this one).
       * The click event object contains among other things different
       * coordinates that we need when calculating where in the map the click
       * actually happened. */
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      socket.emit('addOrder', {
        orderId: this.getNext(),
        details: {
          x: this.mapInfo.x,
          y: this.mapInfo.y,
        },
        orderItems: [this.currentOrderData.orderedBurger],
        personalInfo: {name: this.currentOrderData.name, email: this.currentOrderData.email, 
                       payment: this.currentOrderData.payment, gender: this.currentOrderData.gender},
      });
      this.currentOrderData.name = null;
    },
    displayOrder: function(event) {
      let offset = {
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      };
      this.mapInfo = { x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y }; 
    },
    showOrHideOrder: function(event){
      if(this.isHidden == true){
        this.isHidden = false;
      } else {
        this.isHidden = true;
      }
    }
  },

  created: function() {
    socket.on('initialize', function(data) {
      this.currentOrder = data.orders;
    }.bind(this));
    
    socket.on('currentQueue', function(data) {
      this.currentOrder = data.orders;
    }.bind(this));
  },
});
