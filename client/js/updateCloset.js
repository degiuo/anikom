const form = document.querySelector('form');
const id = location.pathname.split('/')[2];
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  let image = document.getElementById('image').files[0];

  console.log(image);

  if(image)formData.append('image', image);

  fetch(`/api/closets/${id}`, {
    method: 'PUT',
    body: formData
  }).
  then(res => res.json()).
  then(data => alert(data)).
  catch(e => console.log(e));
  location.assign(`/`);
});