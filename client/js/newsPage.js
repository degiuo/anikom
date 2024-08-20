document.addEventListener('DOMContentLoaded', start);

const listNewsDiv = document.querySelector('.listNews');
var role;

function start(){
    fetch('/auth/user').
    then(res => res.json()).
    then(data => {
        role = data.role;
    });

    fetch('/api/news').
    then(res => res.json()).
    then(data => {
        data.forEach(el => {
            innerHTML(el);
        });
        if(role == 'ADMIN') document.querySelectorAll('.adminBtn').forEach(el => el.style.display = 'block');
        else document.querySelectorAll('.adminBtn').forEach(el => el.style.display = 'none');
    });
};

function innerHTML({id, title, image, description, date}){
    const convertDate = new Date(date*1000);
    const dateStr = `${convertDate.toISOString().split('T')[0]} ${convertDate.toISOString().split('T')[1].split('.')[0]}`;

    listNewsDiv.insertAdjacentHTML('beforeend', `
        <div class='news' id='${id}'>
            <div class='imageNews'>
                <img src='${image}'>
            </div>
            <div class='titleNews'>
                ${title}
                <div class='dateNews'>${dateStr}</div>
            </div>
            <div class='descriptionNews'>
                ${description}
            </div>
            <div class='button_admin'>
                <div class='adminBtn' id='deleteNewsBtn'><img src="../asset/delete.png" onclick='deleteNews(${id})'></img></div>
            </div>
        </div>
    `);
}

function deleteNews(id){
    const result = confirm('Вы точно хотите удалить?');
    if(result){
        fetch(`/api/news/${id}`, {
        method: 'DELETE'
        }).then(res => {
        if(res.ok) location.reload();
        }).catch(e => console.log(e));
    }
}