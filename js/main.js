//---------------------- Add to cart --------------------------------
const updateProductAmount = (cart) => {
  const quantity = cart.reduce((total, item) => total + item.amount, 0);
  document.querySelector('#cart-number').innerHTML = quantity;  
};

const addProductToCart = (button, products) => {
  const productId = button.getAttribute('data-id');

  const product = products.find(item => item.id === +productId);

  const cartItems = JSON.parse(localStorage.getItem('cart'));

  if(cartItems && cartItems.length > 0) {
    const existedItem = cartItems.find(item => item.id === +productId);

    if(existedItem) {
      const updatedCart = cartItems.map(item => {
        if(item.id === product.id) {
          return {...item, amount: Number(item.amount) + 1}
        }
        return item;
      });
      setProductStorage('cart', updatedCart);
      updateProductAmount(updatedCart);
    } else {
      cartItems.push({...product, amount: 1});
      setProductStorage('cart', cartItems)
      updateProductAmount(cartItems);
    }
  } else {
    setProductStorage('cart', [{...product, amount: 1}]);
    document.querySelector('#cart-number').innerHTML = 1; 
  }
};

const addEventBtn = (products) => {
  const btnOrder = document.querySelectorAll('.add-btn');
  console.log(btnOrder);

  btnOrder.forEach(button => {
    button.addEventListener('click', () => addProductToCart(button, products));
  });
};

//---------------------- Delete from cart --------------------------------
const removeProductFromCart = (button) => {
  const productId = button.getAttribute('data-id');
  const cartList = JSON.parse(localStorage.getItem('cart'));  
  const updatedCartList = cartList.filter(item => item.id !== +productId);
  setProductStorage('cart', updatedCartList);
  displayCartItems();
  displayCartPayment();
  deleteEventBtn();
};

const deleteEventBtn = () => {
  const btnDelete = document.querySelectorAll('.delete-btn');

  btnDelete.forEach(button => {
    button.addEventListener('click', () => removeProductFromCart(button));
  })
};

//---------------------- Process events --------------------------------
const addProcessEvent = () => {
  const prevBtns = document.querySelectorAll('.prev-btn');
  const nextBtns = document.querySelectorAll('.next-btn');
  const progressLine = document.getElementById('progress')
  const processBlocks = document.querySelectorAll('.process-block');
  const progressSteps = document.querySelectorAll('.progress-step');

  let processStepsNum = 0;

  const updateProcess = (step) => {
    processStepsNum += step;
    updateProcessBlocks();
    updateProgressBar();
  };

  nextBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      updateProcess(1);
    })
  });

  prevBtns.forEach(button => {
    button.addEventListener('click', (e) => {
      updateProcess(-1);
    })
  });

  const updateProcessBlocks = () => {
    processBlocks.forEach(processBlock => {
      if(processBlock.classList.contains('process-block-active')) {
        processBlock.classList.remove('process-block-active');
      }
    });

    processBlocks[processStepsNum].classList.add('process-block-active')
  };

  const updateProgressBar = () => {
    progressSteps.forEach((step, index) => {
      if(index <= processStepsNum) {
        step.classList.add('progress-step-active');
      } else {
        step.classList.remove('progress-step-active');
      }
    });

    const progressActive = document.querySelectorAll('.progress-step-active');

    progressLine.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
  };
};

const addSubmitEvent = () => {
  const submitBtn = document.querySelector('.submit-btn');

  if(submitBtn) {
    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
  
      const name = document.getElementById('name').value;
      const phoneNumber = document.getElementById('phone-number').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
      const customer = {name, phoneNumber: +phoneNumber, email, address};
  
      if(customerValidate(customer)) {
        fetch(USERS_API_URL, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(customer)
        });
      } else {
        document.getElementById('final-step').innerHTML = "Thanh toán không thành công! xin mời kiểm tra lại thông tin cá nhân";
      }
  
      setProductStorage('cart', []);
    });
  }
};
