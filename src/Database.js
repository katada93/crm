(function () {
  'use strict';
  const database = {
    lastReviewed: {
      maxLength: 4,
      orderIds: []
    },
    maxOrders: 10,
    orders: []
  };

  load();

  const api = new EventEmitter;

  api.seed = function seed(orders) {
    database.orders = getCopy(orders);

    save();
    api.emit('update');
  }

  api.getOrders = function getOrders(state) {
    state = getCopy(state);
    let orders = getCopy(database.orders);

    if (state.fullname) {
      const fullnameLowercase = state.fullname.toLowerCase();
      orders = orders.filter((x) => x.fullname.toLowerCase().includes(fullnameLowercase));
    }

    if (state.good) {
      orders = orders.filter((x) => x.good === state.good)
    }

    if (state.status) {
      orders = orders.filter((x) => x.status === state.status)
    }

    if (state.minprice) {
      orders = orders.filter((x) => x.price >= state.minprice)
    }

    if (state.maxprice) {
      orders = orders.filter((x) => x.price <= state.maxprice)
    }

    if (state.mindate) {
      orders = orders.filter((x) => x.date >= state.mindate)
    }
    if (state.maxdate) {
      orders = orders.filter((x) => x.date <= state.maxdate)
    }

    return {
      orders: orders.slice((state.currentPage - 1) * database.maxOrders, state.currentPage * database.maxOrders),
      currentPage: state.currentPage,
      commonPages: Math.ceil(orders.length / database.maxOrders)
    }

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