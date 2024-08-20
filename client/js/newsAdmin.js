const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  fetch('/api/news', {
    method: 'POST',
    body: formData
  }).then(res => {
    if(res.ok){
      alert('Все успешно прошло!');
      location.assign('/news');
    }
  });
});

