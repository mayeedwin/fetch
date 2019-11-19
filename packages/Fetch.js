// fetch api package for npm and github packages

require('getUrl');

exports.fetchData = () => fetch('../data/Users.json')
.then(response => response.json())