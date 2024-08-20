const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  
  try{
    fetch('/auth/login', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then(res => {
      if(res.ok){
        // localStorage.setItem('user', email);
        location.assign('/home');
        // alert('Успешно авторизовались!');
        return res.json()
      } else {
        alert('Неправильный логин или пароль!');
      } 
    }).
    then(data => console.log(data)).
    catch(e => console.log(e));
  }catch(e){
    console.log(e);
  }
});