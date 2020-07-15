function updateLastReviewedList() {
  const orders = Database.getLastReviewed();
  const template = document.querySelector('[data-reviewed]').content.querySelector('li');
  const reviewedListElement = document.querySelector('[data-reviewed-list]');
  reviewedListElement.innerHTML = '';

  for (const order of orders) {
    const liElement = template.cloneNode(true);
    liElement.innerHTML = liElement.innerHTML
      .replace(/%FULLNAME%/g, order.fullname)
      .replace(/%ID%/g, order.id);

    reviewedListElement.append(liElement);
  }
}