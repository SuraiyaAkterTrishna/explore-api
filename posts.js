function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        console.log(post);
    }
}
loadPosts();