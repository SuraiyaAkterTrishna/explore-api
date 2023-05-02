function loadUsers2(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data))
}
function displayUser(data){
    console.log(data);
};