const imageDiv = document.querySelector('.image img');
const nameDiv = document.querySelector('.content .name');
const priceDiv = document.querySelector('.content .price');
const paramDiv = document.querySelector('.content .param');
const descriptionDiv = document.querySelector('.description');

const comments = document.querySelector('.comments');

const deleteBtn = document.querySelectorAll(".deleteBtn");
const addBtn = document.querySelector('.reviews .writeReviews .addBtn');
const idCloset = location.pathname.split('/')[2];

function start(){
    fetch(`/api/closets/${idCloset}`).
    then(res => res.json()).
    then(data => {
        const {name, width, height, power_consumption, image, price, description} = data[0];
        imageDiv.src = '/' + image;
        nameDiv.innerText = name;
        paramDiv.innerText = `${width}x${height}см , ${power_consumption}Вт`;
        priceDiv.innerText = price + " ₽";
        descriptionDiv.innerText = description;
    });

    fetch(`/comment/${idCloset}`).
    then(res => res.json()).
    then(data => {
        if(data) data.forEach(el => {
            getComment(el);
        });
    })
};

function getComment({id, email, comment, date, userId}){
    const convertDate = new Date(date*1000);
    const dateStr = `${convertDate.toISOString().split('T')[0]} ${convertDate.toISOString().split('T')[1].split('.')[0]}`;
    
    comments.insertAdjacentHTML('beforeend', `
        <div id='${id}' class='com'>
            <div class='avtor'>${email}<div class='date'>${dateStr}</div></div>
            <div class='comment'>${comment}</div>
        </div>
        
    `);

    fetch('/auth/user').
    then(res => res.json()).
    then(date => {
        if(date.id == userId) 
            document.getElementById(`${id}`).innerHTML += `<img class='deleteBtn' src='../asset/delete.png'></img>`;
        }    
    ).
    catch(e => console.log(e))
}

window.addEventListener('DOMContentLoaded', start);
addBtn.addEventListener('click', addComment);
document.addEventListener('click', deleteComment);

function addComment(){
    const comment = document.querySelector('.inputComment').value;
    const formData = new FormData();
    formData.append('closet', idCloset);
    formData.append('comment', comment);
    try{
        fetch('/comment/add', {
            method: 'POST',
            body: formData
        }).then(res => {
            if(!res.ok) alert('Вы не зарегистрованы!');
            else location.reload();
        })
    }catch(e){
        console.log(e);
    }

}

function deleteComment(event){
    if(event.target.parentNode.className == 'com'){ 
        let id = event.target.parentNode.id;

        fetch(`/comment/${id}`, {
            method: 'DELETE'
        }).
        then(res => {
            if(res.ok) location.reload();
        }).catch(e => alert(e));
    }
}