(function () {
  'use strict';
  const database = {
    orders: []
  };

  const api = {};

  api.seed = function seed(orders) {
    database.orders = getCopy(orders);
  }

  api.getOrderById = function getOrderById(id) {
    const order = database.orders.find((x) => x.id === id);

    if (order) {
      return getCopy(order);
    }

    return null;
  };

  window.Database = api;

  function getCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }
})();
