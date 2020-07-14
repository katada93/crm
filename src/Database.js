(function () {
  'use strict';
  const database = {
    lastReviewed: {
      maxLength: 4,
      orderIds: [1, 2, 3, 4]
    },
    orders: [
      { id: 1, fullname: 'Мухаммад Цокаев', good: 'Бумага дял принтера', price: 500, status: 'new', date: Date.now() },
      { id: 2, fullname: 'Алексей Иванов', good: 'Краска дял принтера', price: 2000, status: 'process', date: Date.now() },
      { id: 3, fullname: 'Олег Петухов', good: 'Принтер', price: 12000, status: 'back', date: Date.now() },
    ]
  };

  const api = new EventEmitter;

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

  api.getLastReviewed = function getLastReviewed() {
    return database.lastReviewed.orderIds.map(x => api.getOrderById(x));
  }

  api.addLastReviewed = function addLastReviewed(orderId) {
    if (database.lastReviewed.orderIds.includes(orderId)) {
      const index = database.lastReviewed.orderIds.indexOf(orderId);
      database.lastReviewed.orderIds.splice(index, 1);
    }
    database.lastReviewed.orderIds = [orderId, ...database.lastReviewed.orderIds].slice(0, database.lastReviewed.maxLength);

    api.emit('update');
  }

  window.Database = api;

  function getCopy(x) {
    return JSON.parse(JSON.stringify(x));
  }
})();
