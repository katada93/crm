(function () {
  'use strict';
  const database = {
    orders: [
      {
        id: 1,
        fullname: 'Мухаммад Цокаев',
        good: 'Бумага дял принтера',
        price: 500,
        status: 'new',
        date: Date.now(),
      },
      {
        id: 2,
        fullname: 'Алексей Иванов',
        good: 'Краска дял принтера',
        price: 2000,
        status: 'process',
        date: Date.now(),
      },
      {
        id: 3,
        fullname: 'Олег Петухов',
        good: 'Принтер',
        price: 12000,
        status: 'back',
        date: Date.now(),
      },
    ],
  };

  const api = {};

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
