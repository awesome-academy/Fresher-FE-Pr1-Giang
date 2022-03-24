const pagination = (products) => {
  const pagination = document.querySelector('.page-navigation');

  if(pagination) {
    const products_per_page = 12;

    const pageNum = Math.ceil(products.length / products_per_page);

    let paginatedBtns = "";

    for(let i = 1; i <= pageNum; i++) {
      paginatedBtns += `
        <button class="pag-btn" data-page-num=${i}>${i}</button>
      `
    };

    pagination.innerHTML = paginatedBtns;

    addPaginatedBtn();
  }
};

const addPaginatedBtn = () => {
  const paginatedBtns = document.querySelectorAll('.pag-btn');

  paginatedBtns.forEach(button => {
    button.addEventListener('click', () => handlePaginatedBtn(button))
  })
};

const handlePaginatedBtn = (button) => {
  const pageNum = button.getAttribute('data-page-num');

  products_url = `http://localhost:3000/products?_page=${pageNum}&_limit=12`;

  displayGridProducts();
};
