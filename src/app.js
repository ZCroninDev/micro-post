import { http } from './http';

// Get post on DOM load
document.addEventListener('DOMContentLoaded', getPost);

function getPost() {
  http.get('http://localhost:3000/post')
    .then(data => console.log(data))
    .catch(err => console.log(err));
}