import "../scss/style.scss";

document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const checkbox = document.querySelector('#special');
    
    const changeTheme = () => {
        const page = document.querySelector('.page');

        if (checkbox.checked) {
            page.classList.remove('him');
            page.classList.add('her');    
        } else {
            page.classList.remove('her');
            page.classList.add('him');
        }
    };

    checkbox.addEventListener('change', () => {
        changeTheme();
    });

});
