const state = {};

Database.addEventListener('update', update);

init();
update();

function init() {

}

function update() {
  updateLastReviewedList();
}

function setState(obj) {
  Object.assign(state, obj);
  update();
}