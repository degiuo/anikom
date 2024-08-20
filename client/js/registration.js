const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const lastname = document.querySelector('#lastname').value;
  const firstname = document.querySelector('#firstname').value;
  const surname = document.querySelector('#surname').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const password = document.querySelector('#password').value;
  const confirm_password = document.querySelector('#confirm_password').value;

  console.log({lastname, firstname, surname, email, phone, password, confirm_password})

  try{
    if(confirm_password == password){
        fetch('http://localhost:5500/auth/registration', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            lastname, 
            firstname, 
            surname, 
            email, 
            phone, 
            password
        })
        }).then(res => {
        if(res.ok){
            location.assign('/');
            // alert('Успешная регистрация!');
            return res.json();
        }else{
          alert('Такой пользователь уже есть!');
        }
        }).
        then(data => console.log(data)).
        catch(e => console.log(e));
    }
    else{
      alert('Пароль не совпадает!');
    }
  }catch(e){
    console.log(e);
  }
});