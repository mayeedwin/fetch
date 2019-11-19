import { getData } from './modules/Fetch.js';

getData().then(data => {
    let users = data;

    let all = document.querySelector('.users');

    // loop through users
    for (let user of users) {
      
        let person = document.createElement('div');
        let name = document.createElement('p');
        let bio = document.createElement('p');
        let country = document.createElement('span');

        // set attributes
        name.setAttribute('class', 'name');
        bio.setAttribute('class', 'bio');
        country.setAttribute('class', 'country');
       
        // set inner text
        name.innerText = `${user.name}`;
        bio.innerText = `${user.bio}`;
        country.innerText = `${user.country}`;

        all.appendChild(person);
        person.appendChild(name);
        person.appendChild(bio);
        person.appendChild(country);
    }

}).catch(err => {
    // Do something for an error here
    console.log(err);
})