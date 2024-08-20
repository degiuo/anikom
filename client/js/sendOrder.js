const orderPanel = document.querySelector('.orderPanel');
const closePanelId = document.querySelector('#closePanel');
const form = document.querySelector('.orderForm');
const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address";
const token = "11aff96dff2c13523f28035e3d26e72523207201";
const addressInput = document.querySelector('#addressInput');
const note_order = document.querySelector('#note_order');
const datalist = document.querySelector('#address_list');
const online_check = document.querySelector('#online_check');
const count = document.querySelector('#count');

var id; 

window.addEventListener('DOMContentLoaded', () => {
    orderPanel.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if(event.target.classList.contains('buttonOrder')){
        fetch('/auth/user').
        then(res => {
            if(res.ok) OrderPanel(event.target.parentNode);
            else alert('Авторизуйтесь!')
        });
    }
});

function OrderPanel(node){
    orderPanel.style.display = 'block';
    id = node.parentNode.id;
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    fetch('/api/order', {
        method: 'POST',
        headers:{
            'Content-type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
            closet: id,
            status_code: 1,
            address: addressInput.value,
            note_order: note_order.value,
            online_check: online_check.checked,
            count: count.value
        })
    }).then(res => {
        if(res.ok) alert('Заказ отправлен!');
        else alert('Error!');
    }).catch(e => {
        console.log(e);
    });
    
    orderPanel.style.display = 'none';
});

addressInput.addEventListener('input', searchAddress);

function searchAddress(){
    datalist.innerHTML = '';
    var query = addressInput.value;
    
    fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Accept": "application/json",
            "Authorization": "Token " + token
        },
        body: JSON.stringify({query})
    })
    .then(res => res.json())
    .then(result => {
        result.suggestions.forEach(el => {
            datalist.insertAdjacentHTML('beforeend',
                `<option value="${el.value}"></option>`
            );
        });
    })
    .catch(error => console.log("error", error));
}

closePanelId.addEventListener('click', closePanel);

function closePanel(){
    orderPanel.style.display = 'none';
}