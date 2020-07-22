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
Router.addEventListener('update', () => {
  const hashObject = Router.getHashObject();
  setState(hashObject);
});

init();
update();

function init() {
  const hashObject = Router.getHashObject();

  byFilterNames(filterName => {
    if (hashObject[filterName]) {
      document.querySelector(`[data-filter-${filterName}]`).value = hashObject[filterName];
      state[filterName] = hashObject[filterName];
    }

    const element = document.querySelector(`[data-filter-${filterName}]`);

    element.addEventListener('keyup', handler);
    element.addEventListener('change', handler);
    function handler() {
      if (this.value) {
        setState({
          [filterName]: this.value
        })
      } else {
        setState({
          [filterName]: null
        })
      }
    }
  })

  if (hashObject.currentPage) {
    state.currentPage = hashObject.currentPage;
  }

  document.querySelector('[data-pagenav-prev]').addEventListener('click', (e) => {
    e.preventDefault();
    setState({
      currentPage: state.currentPage - 1
    })
  })
  document.querySelector('[data-pagenav-next]').addEventListener('click', (e) => {
    e.preventDefault();
    setState({
      currentPage: state.currentPage + 1
    })
  })

  document.querySelector('[data-pagination]').addEventListener('click', (e) => {
    e.preventDefault();
    const pageNumber = parseInt(e.target.textContent);

    setState({
      currentPage: pageNumber
    })
  })
}

function update() {
  updateLastReviewedList();

  byFilterNames(filterName => {
    const element = document.querySelector(`[data-filter-${filterName}]`);
    if (state[filterName]) {
      element.value = state[filterName];
    } else {
      element.value = '';
    }
  })

  const answer = Database.getOrders(state);
  state.orders = answer.orders;
  state.currentPage = answer.currentPage;
  state.commonPages = answer.commonPages;

  updateTable();
  updatePagination();
}

function setState(obj) {
  Object.assign(state, obj);

  const hashObject = {};

  if (state.currentPage !== 1) {
    hashObject.currentPage = state.currentPage;
  }

  byFilterNames(filterName => {
    if (state[filterName]) {
      hashObject[filterName] = state[filterName];
    }
  });

  Router.setHashObject(hashObject);
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

function byFilterNames(handler) {
  const filterNames = ['fullname', 'good', 'status', 'minprice', 'maxprice', 'mindate', 'maxdate'];

  for (const filterName of filterNames) {
    handler(filterName);
  }
}

function updatePagination() {
  const numbersMounte = document.querySelector('[data-pagination]');
  const prevButton = document.querySelector('[data-pagenav-prev]');
  const nextButton = document.querySelector('[data-pagenav-next]');

  numbersMounte.innerHTML = '';

  for (let i = 0; i < state.commonPages; i++) {
    const liElement = document.createElement('li');
    liElement.classList.add('page-item');

    if (state.currentPage === i + 1) {
      liElement.classList.add('active');
    }

    const aElement = document.createElement('a');
    aElement.classList.add('page-link');
    aElement.setAttribute('href', '#');
    aElement.textContent = i + 1;

    liElement.append(aElement);
    numbersMounte.append(liElement);
  }

  prevButton.classList.remove('disabled')
  nextButton.classList.remove('disabled')

  if (state.currentPage === 1) {
    prevButton.classList.add('disabled');
  }

  if (state.currentPage === state.commonPages) {
    nextButton.classList.add('disabled');
  }
}