const state = {
  fullname: null,
  good: null,
  status: null,
  minprice: null,
  maxprice: null,
  mindate: null,
  maxdate: null,
  orders: [],
  currentPage: 1,
  commonPages: 1
};

Database.addEventListener('update', update);

init();
update();

function init() {
  document.querySelector('[data-filter-fullname]').addEventListener('keyup', function (e) {
    if (this.value) {
      setState({
        fullname: this.value
      })
    } else {
      setState({
        fullname: null
      })
    }
  })
}

function update() {
  updateLastReviewedList();

  const answer = Database.getOrders(state);
  state.orders = answer.orders;
  state.currentPage = answer.currentPage;
  state.commonPages = answer.commonPages;

  console.log(answer)

  updateTable();
}

function setState(obj) {
  Object.assign(state, obj);
  update();
}

function updateTable() {
  const template = document.querySelector('[data-order-row]').content.querySelector('tr');
  const ordersListElement = document.querySelector('[data-orders-list]');

  const currencyFormator = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB'
  })

  const dateFormator = new Intl.DateTimeFormat('ru-RU')

  ordersListElement.innerHTML = '';

  for (const order of state.orders) {
    const trElement = template.cloneNode(true);
    const date = new Date(order.date);

    trElement.innerHTML = trElement.innerHTML
      .replace(/%ID%/g, order.id)
      .replace(/%FULLNAME%/g, order.fullname)
      .replace(/%GOOD%/g, order.good)
      .replace(/%PRICE%/g, currencyFormator.format(order.price))
      .replace(/%STATUS%/g, order.status)
      .replace(/%STATUS_COLOR%/g, getStatusColor(order.status))
      .replace(/%DATE%/g, dateFormator.format(date))

    ordersListElement.append(trElement);
  }

  function getStatusColor(status) {
    if (status === 'new') return 'primary';
    if (status === 'back') return 'danger';
    if (status === 'process') return 'warning';
    if (status === 'archived') return 'dark';
  }
}