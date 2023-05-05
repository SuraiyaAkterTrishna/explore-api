function loadComments(){
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => displayComments(data));
}
function displayComments(comments){
    const commentsContainer = document.getElementById('comments-contaienr')
    for (const comment of comments) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <h3>Title: ${comment.name}</h3>
            <h5> Serial: ${comment.id}</h5>
            <h5>Post No: ${comment.postId}</h5>
            <p>User Email: ${comment.email}</p>
            <p>Description: ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentDiv);
        console.log(comment);
    }
    
}
loadComments();
