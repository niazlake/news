import {Injectable} from '@angular/core';
import {UserModel} from './model/user.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PostModel} from './model/post.model';

export const URL_API = '';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private httpClient: HttpClient) {
  }

  loginSystem(userModel: UserModel): Observable<any> {
    return this.httpClient.post(URL_API + '', userModel);
  }

  registrationSystem(userModel: UserModel): Observable<any> {
    return this.httpClient.post(URL_API + '', userModel);
  }

  getFullPost$(): Observable<PostModel[]> {
    return this.httpClient.get<PostModel[]>(URL_API + '');
  }

  getByIdPost(id: number): Observable<any> {
    return this.httpClient.get(URL_API + '');
  }

  addPost(post: PostModel): Observable<any> {
    return this.httpClient.post(URL_API + '', post);
  }

  deletePost(id: number): Observable<any> {
    return this.httpClient.delete(URL_API + '' + id);
  }

  updatePost(post: PostModel): Observable<any> {
    return this.httpClient.put(URL_API + '' + post.id, post);
  }
}
