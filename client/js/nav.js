const login = document.querySelector('#login');
const registration = document.querySelector('#registration');
const userName = document.querySelector('#userName');
const logout = document.querySelector('#logout');
const orders = document.querySelector('#orders');

function start(){
  fetch('/auth/user').
  then(res => res.json()).
  then(data => {
    if(data.firstname){
      userName.innerHTML = `<a href="./">${data.firstname}</a>`;
      login.style.display = registration.style.display = 'none';
      userName.style.display = logout.style.display = orders.style.display = 'block';
    }else{
      login.style.display = registration.style.display = 'block';
      userName.style.display = logout.style.display = orders.style.display = 'none';
    }
  })
}

window.addEventListener('DOMContentLoaded', start);

