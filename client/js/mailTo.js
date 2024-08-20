document.addEventListener('DOMContentLoaded', function() {
    var openFormBtn = document.getElementById('openFormBtn');
    var feedbackForm = document.getElementById('feedbackForm');
    var closeFormBtn = document.getElementById('closeFormBtn');
  
    openFormBtn.addEventListener('click', function() {
      feedbackForm.style.transform = 'translateY(0)';
    });
  
    closeFormBtn.addEventListener('click', function() {
      feedbackForm.style.transform = 'translateY(120%)';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target == feedbackForm) {
        feedbackForm.style.transform = 'translateY(120%)';
      }
    });
  
    document.getElementById('feedbackFormContent').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.querySelector('#feedbackFormContent #name').value;
        const email = document.querySelector('#feedbackFormContent #email').value;
        const tel = document.querySelector('#feedbackFormContent #tel').value;
        const message = document.querySelector('#feedbackFormContent #message').value;

        const str = `Имя: ${name}, <br> Почта: ${email}, <br> Телефон: ${tel}, <br> Сообщение: ${message}.`;

        Email.send({
            Host : "smtp.elasticemail.com",
            Username : "degiuo@gmail.com",
            Password : "C987769AA291B057E0B9975A595B70A08E5F",
            To : 'degiuo@gmail.com',
            From : "degiuo@gmail.com",
            Subject : "Сообщение от пользователя",
            Body : str
        }).then(
        message => alert(message)
        );
        alert('Спасибо за ваш отзыв!');
        feedbackForm.style.transform = 'translateY(120%)';
    });
});
