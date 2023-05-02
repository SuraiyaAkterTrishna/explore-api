function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    const postContainer = document.getElementById('post-container');
    for (const post of posts) {
        const div = document.createElement('div');
        div.innerHTML = `
            <h4>User - </h4>
            <h5>Post - title </h5>
            <p>Description: </p>
        `
    }
}
loadPosts();