// fetch students' data
export const getData = () => fetch('../data/Users.json')
.then(response => response.json())