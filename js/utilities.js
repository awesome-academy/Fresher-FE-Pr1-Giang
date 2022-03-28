const customerValidate = (customer) => {
  if(typeof customer.name !== 'string') {
    document.getElementById('name-error').innerText = "Please enter text only!";
    
    return false
  }

  if(typeof customer.phoneNumber !== 'number') {
    document.getElementById('number-error').innerText = "Please enter numbers!";

    return false
  }

  if(!customer.email.includes("@")) {
    document.getElementById('email-error').innerText = "ex: example@gmail.com";

    return false
  }

  if(typeof customer.address !== 'string') {
    document.getElementById('address-error').innerText = "Please enter text only!";

    return false
  }

  return true;
};

const convertMoney = (money) => {
  return money.toFixed(0).toString().split(/(?=(?:\d{3})+(?:\.|$))/g).join('.') + ' đ';
};

const setProductStorage = (name, value) => {
  localStorage.setItem(name, JSON.stringify(value));
};
