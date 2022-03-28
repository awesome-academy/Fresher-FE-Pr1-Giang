const navLink = (category, text) => {
  return `<li class="mb-2"> <a class="sidebar-link" data-category=${category}> <i class="fa-solid fa-angle-right"></i><span>${text}</span></a></li>`;
};

const renderSidebar = (products, categories, id) => {
  const sideBar = document.getElementById('sidebar-product');

  if(sideBar) {
    let navLinkList = "";

    for(let i = 0; i < categories.length; i++) {
      switch (categories[i]) {
        case "featured":
          navLinkList += navLink("featured", "Sản phẩm nổi bật")
          break;
        case "discount":
          navLinkList += navLink("discount", "Sản phẩm giảm giá")
          break;
        case "bestSelling":
        navLinkList += navLink("bestSelling", "Sản phẩm bán chạy")
          break;
        case "new":
        navLinkList += navLink("new", "Sản phẩm mới")
          break;
        case "regular":
          navLinkList += navLink("regular", "Sản phẩm truyền thống")
            break;
        default:
          break;
      }
    }

    sideBar.innerHTML = navLinkList;

    addSideBarEvent(products);
  }
};

const addSideBarEvent = (products) => {
  const sideBarLinks = document.querySelectorAll('.sidebar-link');

  sideBarLinks.forEach(link => {
    link.addEventListener('click', () => handleSideBarLink(link, products))
  })
};

const handleSideBarLink = (link, products) => {
  const dataCategory = link.getAttribute('data-category');

  category = dataCategory;

  displayColumnProducts(products);
  displayGridProducts(products);
};

const filterType = (products) => {
  let type = "";
  let productTypes = [];

  for(let i = 0; i < products.length; i++){
    if (products[i].type !== type) {
      productTypes.push(products[i].type);
      type = products[i].type;
    }
  }

  renderSidebar(products, productTypes, 'sidebar-product');
};
