window.addEventListener('load', () => {

    const form_button = document.querySelector('.form__right__button');
    const form_button_border_top = document.querySelector('.form__right__border-top');
    const form_button_border_right = document.querySelector('.form__right__border-right');
    const form_button_border_bottom = document.querySelector('.form__right__border-bottom');
    const form_button_border_left = document.querySelector('.form__right__border-left');

    form_button.addEventListener('mouseover', () => {

        form_button_border_top.style.transform = 'translateX(0)';
        form_button_border_right.style.transform = 'translateY(100%)';
        form_button_border_bottom.style.transform = 'translateX(0)';
        form_button_border_left.style.transform = 'translateY(-100%)';

    });

    form_button.addEventListener('mouseout', () => {

        form_button_border_top.style.transform = 'translateX(100%)';
        form_button_border_right.style.transform = 'translateY(0)';
        form_button_border_bottom.style.transform = 'translateX(-100%)';
        form_button_border_left.style.transform = 'translateY(0)';

    });

});