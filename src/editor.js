const state = {
  orderId: null
};

Database.addEventListener('update', update);
Router.addEventListener('update', update);

init();
update();

function init() {
  const hashObject = Router.getHashObject();

  if (hashObject.orderId) {
    setState({
      orderId: hashObject.orderId
    })
  }
}

function update() {
  const hashObject = Router.getHashObject();

  if (hashObject.orderId && hashObject.orderId !== state.orderId) {
    setState({
      orderId: hashObject.orderId
    })

    Database.addLastReviewed(hashObject.orderId);
  }

  updateLastReviewedList();
}

function setState(obj) {
  Object.assign(state, obj);
  update();
}