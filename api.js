const user = {id: 1, name: 'Gorib Aamir', job: 'Actor'};
// JavaScript Object Notation 
const stringified = JSON.stringify(user);
console.log(stringified);
const userObj = JSON.parse(stringified);
console.log(userObj);