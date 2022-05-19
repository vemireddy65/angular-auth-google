import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
url = 'https://boomservices-dot-folkloric-union-281507.el.r.appspot.com/v1/business/biztcjfqe6pbo';
  constructor(
    private http:HttpClient
  ) { }

getData(){
  return this.http.get(this.url);
}
}
