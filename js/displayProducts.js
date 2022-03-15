const displayGridProducts = (allProducts) => {
  const productList = document.getElementById('product-list-grid');

  if(productList) {
    let list = "";

    for(let i = 0; i < allProducts.length; i++){
      list += `<div class="col-md-4">
                ${productLarge(allProducts[i])}
              </div>`
    };

    productList.innerHTML = list;
  }
  
};

const displayColumnProducts = (featuredProducts) => {
  const productList = document.getElementById('product-list-column');

  if(productList) {
    let list = "";

    for(let i = 0; i < featuredProducts.length; i++){
      list += `<div class="col-md-12">
                <div class="product-row d-flex mb-4 mobile-flex-column">
                  <div class="col-md-4 col-12"> <a> <img src=${featuredProducts[i].imgSrc}></a></div>
                  <div class="col-md-8 col-12">
                    <div class="product-row__wrapper"> 
                      <div class="product-row__info"> 
                        <p class="product-row__title">${featuredProducts[i].title}</p>
                        ${rating(5)}
                        <p class="product-row__desc d-md-none d-lg-block">${featuredProducts[i].desc}</p>
                        ${prices(featuredProducts[i].curPrice)}
                        <div class="btn__wrapper">
                          <button class="btn-order add-btn" data-category="featuredProducts" data-id=${featuredProducts[i].id} >MUA NGAY</button>
                          <button class="btn-rounded"> <i class="fa-solid fa-magnifying-glass"></i></button>
                          <button class="btn-rounded"> <i class="fa-solid fa-heart"></i></button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>`
    };

    productList.innerHTML = list;
  }
};

const displayBestSelling = (bestSellingProducts) => {
  const productList = document.querySelector(".bestproduct__container");

  if(productList) {
    let list = "";

    for(let i = 0; i < bestSellingProducts.length; i++){
      list += `<div class="bestproduct__wrapper">
                <div class="d-flex product-sm"> 
                  <div class="col-md-5 m-2 img__container"><a> <img src=${bestSellingProducts[i].imgSrc}></a>
                    <div class="product-hover"> 
                      <button class="btn-rounded"> <i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                  </div>
                  <div class="col-md-7 ms-2 d-flex flex-column justify-content-center">
                    <p class="mb-1">${bestSellingProducts[i].title}</p>
                    <div class="d-flex mb-1">
                      ${rating(5)}
                    </div>
                    ${prices(bestSellingProducts[i].curPrice)}
                  </div>
                </div>
              </div>`
    };

    productList.innerHTML = list;
  }
};

const displayDiscounts = (discountProducts) => {
  const productList = document.getElementById('discount-products');

  if(productList) {
    let list = "";

    for(let i = 0; i < discountProducts.length; i++){
      list += `<div class="col-md-4">
                ${productLarge(discountProducts[i], "discountProducts")}
              </div>`
    };

    productList.innerHTML = list;
  }
};

const displayNewProducts = (newProducts) => {
  const productList = document.getElementById('new-products');

  if(productList) {
    let list = "";

    for(let i = 0; i < newProducts.length; i++){
      list += `<div class="col-md-3">
                ${productLarge(newProducts[i], "newProducts")}
            </div>`
    };

    productList.innerHTML = list;
  }
};

const rating = (num) => {
  const stars = [...Array(5)].map((_, index) => index < num ? 'fa-solid fa-star' : 'fa-solid fas-star')
  
  return `
      <div class="star-rating">
          ${stars.map(star => `<i class="${star}"></i>`)}
      </div>
  `
};

const prices = (curPrice, prevPrice= false) => {
  if(prevPrice){
    return `
    <span class="current-price me-1">${convertMoney(curPrice)}</span><span class="prev-price">${convertMoney(prevPrice)}</span>
  `
  } else {
    return `
    <span class="current-price me-1">${convertMoney(curPrice)}</span>
  `
  }
};

const productLarge = (product, category) => {
  return `
    <div class="product-lg mobile-mb mb-4">
      <div class="product-lg__img"><a> <img src=${product.imgSrc}></a>
        <div class="product-hover"> 
          <button class="btn-order add-btn" data-category=${category} data-id=${product.id} >MUA NGAY</button>
          <button class="btn-rounded"> <i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center"> 
        <div class="product__info d-flex flex-column"> 
          <p class="mb-1">${product.title}</p>
          <div class="d-flex justify-content-center mb-1">
            ${rating(4)}
          </div>
          <div class="d-flex justify-content-center align-items-center"> 
            ${prices(product.curPrice, product.prevPrice)}
          </div>
        </div>
      </div>
    </div>
  `
};

const displayFeatured = (featuredProducts) => {
  const productList = document.getElementById('featured-products');

  if(productList) {
    productList.innerHTML = `
    <div class="col-md-6 mobile-mb d-flex flex-wrap">
            ${productLarge(featuredProducts[0], "featuredProducts")}
            <div class="row">
              <div class="col-6"> 
                ${productLarge(featuredProducts[1], "featuredProducts")}
              </div>
              <div class="col-6"> 
                ${productLarge(featuredProducts[2], "featuredProducts")}
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="row"> 
              <div class="col-6"> 
                ${productLarge(featuredProducts[3], "featuredProducts")}
              </div>
              <div class="col-6"> 
                ${productLarge(featuredProducts[4], "featuredProducts")}
              </div>
            </div>
              ${productLarge(featuredProducts[5], "featuredProducts")}
          </div>`;
  }
};
