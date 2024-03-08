import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Post } from '../types/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css'],
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  isLoading: boolean = true;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    // this.api.getPosts(5).subscribe((posts) => {
    //   setTimeout(() => {
    //     this.posts = posts;
    //     this.isLoading = false;
    //   }, 3000);
    //   console.log('all posts  ', posts);
    // });

    this.api.getPosts(5).subscribe({
      next: (posts) => {
        // setTimeout(() => {
        this.posts = posts;
        this.isLoading = false;
        // }, 3000);
      },
      error: (err) => {
        console.error('Error ', err);
        this.isLoading = false;
      },
    });
  }
}
