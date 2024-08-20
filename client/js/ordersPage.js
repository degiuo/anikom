const orders = document.querySelector('.orders');

var role;
var totalPrice = 0;
var statusStr = '<select>';

function start(){
    fetch('/auth/user').
    then(res => res.json()).
    then(data => role = data);

    fetch('/api/orders').
    then(res => res.json()).
    then(data => {
            console.log(data);
            data.forEach((el) => {
                role.role == 'ADMIN'?ordersHTML(el):ordersHTMLUser(el);
            })
            getStatusCode();  
            //document.querySelector('#totalPrice').innerHTML = '<h3>Общая цена: </h3>' + totalPrice + ' ₽';
        }
    );
}

function ordersHTML({id, image, user, price, closet, phone, status_code, online_check, date, address, note_order, count}){
    const convertDate = new Date(date*1000);
    const dateStr = `${convertDate.toISOString().split('T')[0]} ${convertDate.toISOString().split('T')[1].split('.')[0]}`

    totalPrice += price*count;

    orders.insertAdjacentHTML('beforeend', `
        <div class='order' id='${id}'>
            <div class="orderWrap">
            <img src='/${image}'></img>
            <div class='content'>
                <div class='user'>${user}</div>
                <div class='closet'>${closet}</div>
                <div class='date'>${dateStr}</div>
                <div class='status_code' id='status_code'>
                    <select class='listStatusCode' id='${status_code}'>
                    </select>
                </div>
                <div class='online_check'>Оплата: ${online_check == 0?'при получении':'онлайн'}</div>
                <div class='address'>Адресс: ${address}</div>
                <div class='phone'>Тел: ${phone}</div>
                <div class='note_order'>Пожелания: ${note_order?note_order:'пусто'}</div>
                <div class='count'>Количество: ${count}</div>
                <div class='price'>Цена: ${price*count}₽</div>
            </div>
            </div>
            <input type='button' class='setStatusBtn' value='Ок'>
        </div>
        <hr style='border-color: gray;'>
    `);
    
}

function ordersHTMLUser({id, user, image, price, closet, value, online_check, date, address, note_order, count}){
    const convertDate = new Date(date*1000);
    const dateStr = `${convertDate.toISOString().split('T')[0]} ${convertDate.toISOString().split('T')[1].split('.')[0]}`

    totalPrice += price*count;

    if(user == role.email)orders.insertAdjacentHTML('beforeend', `
        <div class='order' id='${id}'>
        <div class="orderWrap">
            <img src='/${image}'></img>
            <div class='content'>
                <div class='closet'>${closet}</div>
                <div class='date'>${dateStr}</div>
                <div class='status_code' id='status_code'>${value}</div>
                <div class='online_check'>Оплата: ${online_check == 0?'при получении':'онлайн'}</div>
                <div class='address'>Адрес: ${address}</div>
                <div class='note_order'>Пожелания: ${note_order?note_order:'пусто'}</div>
                <div class='count'>Количество: ${count}</div>
                <div class='price'>${price*count}₽</div>
            </div>
            </div>
        </div>
        <hr style='border-color: gray;'>
    `);
    
}

function setStatus(target){
    const id = target.parentNode.id;
    const status_code = target.parentNode.querySelector('.listStatusCode').value;
    fetch('/api/status', {
        method: 'PUT',
        headers:{
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            id,
            status_code
        })
    })
    location.reload();
}

async function getStatusCode(){
    const arr = document.querySelectorAll('.listStatusCode');

    arr.forEach(list =>{
        fetch('/api/status').
        then(res => res.json()). 
        then(data => {
            data.forEach(el => {
                list.innerHTML += `<option value='${el.status_code}' ${list.id == el.status_code? 'selected' : ''}>${el.value}</option>`
            })
        })

    })

}

window.addEventListener('DOMContentLoaded', start);
document.addEventListener('click', (event) => {
    if(event.target.className == 'setStatusBtn')setStatus(event.target);
});