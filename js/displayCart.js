const displayCartItems = () => {
  const cartItems = document.getElementById('cart-items');
  const cartList = JSON.parse(localStorage.getItem('cart'));

  if(cartItems && cartList) {
    let list = "";

    for(let i = 0; i < cartList.length; i++){
      list += `
        <tr> 
            <td class="cart-table__img"><img src=${cartList[i].imgSrc}></td>
            <td class="cart-table__title">${cartList[i].title}</td>
            <td>${convertMoney(cartList[i].curPrice)}</td>
            <td>
              <div class="cart-table__quantity"> 
                <div><span>${cartList[i].amount}</span></div>
              </div>
            </td>
            <td class="mobile-display-none">${convertMoney(cartList[i].curPrice * cartList[i].amount)}</td>
            <td> 
              <button class="delete-btn" data-id=${cartList[i].id} data-title="${cartList[i].title}"><i class="fa-solid fa-trash-can"></i></button>
            </td>
          </tr>
      `
    }

    cartItems.innerHTML = list;
  }
};

const displayCartPayment = () => {
  const cartPayment = document.querySelector('.cart-payment');
  const cartList = JSON.parse(localStorage.getItem('cart'));
  let total;
  let tax;

  if(cartList && cartList.length > 0){
    total = cartList.reduce((total, item) => total + (item.amount * item.curPrice), 0);
    tax = total * 0.1;
  }

  if(cartPayment && cartList.length > 0) {
    cartPayment.innerHTML = `
      <tr> 
        <td>tổng tiền (chưa thuế)</td>
        <td>${convertMoney(total)}</td>
      </tr>
      <tr> 
        <td>thuế (vat 10%)</td>
        <td>${convertMoney(tax)}</td>
      </tr>
      <tr> 
        <th>tổng phải thanh toán </th>
        <th>${convertMoney(total + tax)}</th>
      </tr>
    `;
  }
};
