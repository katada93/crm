const state = {};

Database.addEventListener('update', update);

update();

function update() {
  updateLastReviewedList();
}