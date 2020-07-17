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
  document.querySelector('[data-filter-fullname]').addEventListener('keyup', function () {
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

  document.querySelector('[data-filter-good]').addEventListener('change', function () {
    if (this.value) {
      setState({
        good: this.value
      })
    } else {
      setState({
        good: null
      })
    }
  })

  document.querySelector('[data-filter-status]').addEventListener('change', function () {
    if (this.value) {
      setState({
        status: this.value
      })
    } else {
      setState({
        status: null
      })
    }
  })

  document.querySelector('[data-filter-minprice]').addEventListener('keyup', function () {
    if (this.value) {
      setState({
        minprice: this.value
      })
    } else {
      setState({
        minprice: null
      })
    }
  })

  document.querySelector('[data-filter-maxprice]').addEventListener('keyup', function () {
    if (this.value) {
      setState({
        maxprice: this.value
      })
    } else {
      setState({
        maxprice: null
      })
    }
  })

  document.querySelector('[data-filter-mindate]').addEventListener('change', function () {
    if (this.value) {
      const date = new Date(this.value);

      setState({
        mindate: date.getTime()
      })
    } else {
      setState({
        mindate: null
      })
    }
  })

  document.querySelector('[data-filter-maxdate]').addEventListener('change', function () {
    if (this.value) {
      const date = new Date(this.value);

      setState({
        maxdate: date.getTime()
      })
    } else {
      setState({
        maxdate: null
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