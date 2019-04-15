import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = '';

  onAddPost(newPostTextArea: HTMLTextAreaElement) {
    this.newPost = newPostTextArea.value;
  }
}
