addEventListener('DOMContentLoaded', start);

const newsSidebar = document.querySelector('.newsSidebar');

function start(){
  fetch('/api/news').
    then(res => res.json()).
    then(data => {
        data.slice(0, 3).forEach(el => {
          innerHTML(el);
        });
  });
};

function innerHTML({id, title, image, description, date}){
    newsSidebar.insertAdjacentHTML('beforeend', `
        <div class='news' id='${id}'>
            <div class='imageNews'>
                <img src='${image}'>
            </div>
            <div class='titleNews'>
                ${title}
            </div>
            <div class='descriptionNews'>
                ${description.slice(0,100)}
            </div>
        </div>
    `);
}