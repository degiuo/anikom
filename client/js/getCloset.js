window.addEventListener('DOMContentLoaded', start);
const listCloset = document.querySelector('.listCloset');
var role;

async function start(){
  fetch('/auth/user').
  then(res => res.json()).
  then(data => {
    role = data.role;
  });

  const urlParamFilter = location.search;

  fetch('/api/closets' + urlParamFilter).
  then((res) => {return res.json()}).
    then((data) => {
      data.forEach((closet) => closetHTML(closet))
    
      if(role == 'ADMIN'){
        listCloset.insertAdjacentHTML('beforeend',`
          <div class="closet" id="newCloset" onclick="addCloset()"></div>
        `);
      };
    }).
  catch(e => console.log(e)) ;
};

function closetHTML({id, name, image, price, width, height, power_consumption}){
  const listCloset = document.querySelector('.listCloset');
  listCloset.insertAdjacentHTML('beforeend',`
    <div class="closet" id="${id}">
      <div class="zoneClick" onclick="getCloset(${id})">
        <img src="/${image}"/>
        <div class="name">${name} <p class="param">${width}x${height}см, ${power_consumption}Вт</p></div>
      </div>
      <div class='discountZone'>
        <img class='discountImg' src='/asset/discount.png'>
      </div>
      <div class="panelButton">
        ${role == 'ADMIN'? `
            <div class="price">${price}₽</div>
            <img src="../asset/pencil2.png" class="updateBtn" onclick="updateCloset(${id})"></img>
            <button class="buttonOrder">Заказать</button>
            <img src="../asset/delete.png" class="deleteBtn" onclick="deleteCloset(${id})"></img>
          `:`
            <div class="price">${price}₽</div>
            <button class="buttonOrder">Заказать</button>
          `
        }
      </div>
    </div>
  `);
};

function getCloset(id){
  window.location.assign(`/closets/${id}`);
  console.log(id);
}

function updateCloset(id){
  window.location.assign(`/update/${id}`);
}

function addCloset(){
  window.location.assign(`/add`);
}

function deleteCloset(id){
  const result = confirm('Вы точно хотите удалить?');
  if(result){
    fetch(`/api/closets/${id}`, {
      method: 'DELETE'
    }).then(res => {
      if(res.ok) location.reload();
    }).catch(e => console.log(e));
  }
}
