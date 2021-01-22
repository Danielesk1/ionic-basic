import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  url = 'https://jsonplaceholder.typicode.com/photos';

  constructor(
    public http: HttpClient
  ) { }

  public getData(): Observable<any> {
    return this.http.get(this.url);
  }

}
