const displayPaymentList = () => {
  const paymentList = document.getElementById('payment-list');
  const cartList = JSON.parse(localStorage.getItem('cart'));

  if(paymentList && cartList) {
    let list = "";

    for(let i = 0; i < cartList.length; i++){
      list += `
        <div class="payment">
          <div class="payment__img">
            <img src=${cartList[i].imgSrc}>
          </div>
          <div class="payment__name">${cartList[i].title}</div>
          <div class="payment__quantity">
            <span>Số lượng:</span>
            <span>${cartList[i].amount}</span>
          </div>
          <div class="payment__price">${convertMoney(cartList[i].curPrice * cartList[i].amount)}</div>
        </div>
      `
    }

    list += `
      <div class="payment-btn__container">
        <a href='./cartPage.html'><button class="btn-order go-back-cart">QUAY VỀ GIỎ HÀNG</button></a>
        <button class="btn-order next-btn">TIẾP TỤC</button>
      </div>
    `

    paymentList.innerHTML = list;
  }
};
