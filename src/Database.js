(function () {
  'use strict';
  const database = {
    lastReviewed: {
      maxLength: 4,
      orderIds: []
    },
    orders: []
  };

  load();

  const api = new EventEmitter;

  api.seed = function seed(orders) {
    database.orders = getCopy(orders);

    save();
    api.emit('update');
  }

  api.getOrderById = function getOrderById(id) {
    const order = database.orders.find((x) => x.id === id);

    if (order) {
      return getCopy(order);
    }

    return null;
  };

  api.getLastReviewed = function getLastReviewed() {
    return database.lastReviewed.orderIds.map(x => api.getOrderById(x));
  }

  api.addLastReviewed = function addLastReviewed(orderId) {
    if (database.lastReviewed.orderIds.includes(orderId)) {
      const index = database.lastReviewed.orderIds.indexOf(orderId);
      database.lastReviewed.orderIds.splice(index, 1);
    }
    database.lastReviewed.orderIds = [orderId, ...database.lastReviewed.orderIds].slice(0, database.lastReviewed.maxLength);

    save();
    api.emit('update');
  }

  window.Database = api;

  function getCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }

  function save() {
    localStorage.setItem('__CRM-DATABASE__', JSON.stringify(database));
  }

  function load() {
    if (localStorage.getItem('__CRM-DATABASE__')) {
      Object.assign(database, JSON.parse(localStorage.getItem('__CRM-DATABASE__')));
    }
  }
})();