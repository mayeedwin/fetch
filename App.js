import { getData } from "./modules/Fetch.js";

getData()
  .then(data => {
    let users = data;
    let all = document.querySelector(".users");

    // loop through users
    for (let user of users) {
      // create HTML5 elements
      let person = document.createElement("div");
      let username = document.createElement("span");
      let name = document.createElement("p");
      let bio = document.createElement("p");
      let country = document.createElement("span");

      // set attributes
      person.setAttribute("class", "person");
      name.setAttribute("class", "name");
      username.setAttribute("class", "username");
      bio.setAttribute("class", "bio");
      country.setAttribute("class", "country");

      // set inner text
      name.innerText = `${user.name}`;
      username.innerText = `@${user.username}`;
      bio.innerText = `${user.bio}`;
      country.innerText = `${user.country}`;

      // append elements for rendering
      all.appendChild(person);
      person.appendChild(name);
      person.appendChild(username);
      person.appendChild(bio);
      person.appendChild(country);
    }
  })
  .catch(err => {
    // Do something for an error here
    console.log(err);
  });
