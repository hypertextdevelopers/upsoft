window.addEventListener('load', () => {

    const form_btn = document.querySelector('.form__right__button');
    const input_border = document.querySelector('.form__left__border');

    input_border.style.transform = 'translateX(0)';

    form_btn.addEventListener('click', e => {

        e.preventDefault();
        
    });

});