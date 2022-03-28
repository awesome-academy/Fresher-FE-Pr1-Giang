const PRODUCTS_API_URL = 'http://localhost:3000/products';
const USERS_API_URL = 'http://localhost:3000/users';
let page = 1;
const product_url = (page) => {
  return `${PRODUCTS_API_URL}?_page=${page}&_limit=12`
};

product_url(page);

let category = "";
let type_url = (category) => {
  return `${PRODUCTS_API_URL}?type=${category}`;
};


let totalNum;
