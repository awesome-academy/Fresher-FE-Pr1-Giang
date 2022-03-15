let productList;

const getProducts = async () => {
  const response = await fetch(PRODUCTS_API_URL);
  productList = await response.json();

  const featuredProducts = productList.filter(product => product.type === "featured");
  const discountProducts = productList.filter(product => product.type === "discount");
  const bestSellingProducts = productList.filter(product => product.type === "bestSelling");
  const newProducts = productList.filter(product => product.type === "new");
  const allProducts = productList.filter(product => product.type === "regular");

  displayGridProducts(allProducts);
  displayColumnProducts(featuredProducts);
  displayBestSelling(bestSellingProducts);
  displayDiscounts(discountProducts);
  displayNewProducts(newProducts);
  displayFeatured(featuredProducts);
  displayCartItems();
  displayCartPayment();
  displayPaymentList();

  addEventBtn(productList);
  deleteEventBtn();
  addProcessEvent();
  addSubmitEvent();
};

getProducts();
