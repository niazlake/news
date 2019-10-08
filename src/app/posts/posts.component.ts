import {Component, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {PostModel} from '../model/post.model';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postCollection$: Observable<PostModel[]>;

  constructor(private apiService: ApiService) {
  }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postCollection$ = this.apiService.getFullPost$();
  }

}
