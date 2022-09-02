const { default: Echo } = require('laravel-echo');

require('./bootstrap');

window.Echo.private('notifications')
    .listen('UserSessionChanged', (e) => {
        console.log(e);
        const notifiactionElement = document.querySelector('#notification');
        notifiactionElement.innerText = e.message;
        // Remove the current class
        notifiactionElement.classList.remove('invisible');
        notifiactionElement.classList.remove('alert-sucess');
        notifiactionElement.classList.remove('alert-danger');
        // Add Class of The event
        notifiactionElement.classList.add('alert-' + e.type);
    });
