class UI {
  constructor() {
    this.post = document.querySelector('#post');
    this.titleInput = document.querySelector('#title');
    this.bodyInput = document.querySelector('#body');
    this.idInput = document.querySelector('#title');
    this.postSubmit = document.querySelector('.post-submit');
    this.forState = document.querySelector('add');
  }

  showPost(posts) {
    let output = '';

    post.forEach((post) => {
      output += `
        <div class="card mb-3">
          <div class="card-body">
            <h4 class="${post.title}"</h4>
            <p class="card-text">${post.title}</h4>
            <a href="#" class="edit card-link" data-id="${post.id}">
            <i class="fa fa-pencil"</i>
            </a>

            <a href="#" class="delete card-link" data-id="${post.id}">
            <i class="fa fa-remove"</i>
            </a>
          </div>
        </div>
        `;
    });
  }
}

export const ui = new UI();