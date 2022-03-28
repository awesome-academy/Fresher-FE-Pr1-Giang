const pagination = (products, limit, total) => {
  const pagination = document.querySelector('.page-navigation');

  if(pagination) {
    const pageNum = Math.ceil(total / limit);

    let paginatedBtns = "";

    for(let i = 1; i <= pageNum; i++) {
      paginatedBtns += `
        <button class="pag-btn" data-page-num=${i}>${i}</button>
      `
    };

    pagination.innerHTML = paginatedBtns;

    addPaginatedBtn(products, limit);
  }
};

const addPaginatedBtn = (products, limit) => {
  const paginatedBtns = document.querySelectorAll('.pag-btn');

  paginatedBtns.forEach(button => {
    button.addEventListener('click', () => handlePaginatedBtn(button, products, limit))
  })
};

const handlePaginatedBtn = (button, products, limit) => {
  const pageNum = button.getAttribute('data-page-num');

  page = pageNum;
  category = "";

  displayGridProducts(products);
  displayColumnProducts(products);
};
