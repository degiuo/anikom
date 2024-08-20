const arrowFileterBtn = document.querySelector('.filterDiv .arrowFilter');

arrowFileterBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const formFilter = e.target.parentNode;
    formFilter.classList.toggle('open');
    arrowFileterBtn.textContent == '>'?arrowFileterBtn.innerHTML = '<':arrowFileterBtn.innerHTML = '>';
})
