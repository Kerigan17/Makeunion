'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const user = JSON.parse(localStorage.getItem('user'));
    const nameElement = document.getElementById('profile__name');
    const cityElement = document.getElementById('location__city');
    const streetElement = document.getElementById('location__street');
    const phoneElement = document.getElementById('contacts__phone');
    const emailElement = document.getElementById('contacts__email');
    const companyNameElement = document.getElementById('company__name');
    const companyPhraseElement = document.getElementById('company__phrase');
    const companyWebsiteElement = document.getElementById('company__website');

    nameElement.textContent = user.name;
    cityElement.textContent = user.address.city
    streetElement.textContent = user.address.street;
    phoneElement.textContent = user.phone.split(' ')[0];
    phoneElement.href = 'tel:'+ user.phone.split(' ')[0];
    emailElement.textContent = user.email;
    emailElement.href = 'mailto:' + user.email;
    companyNameElement.textContent = user.company.name;
    companyPhraseElement.textContent = user.company.catchPhrase;
    companyWebsiteElement.href = 'http://' + user.website;
    companyWebsiteElement.target = '_blank';
    console.log(user);
});