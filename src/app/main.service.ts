import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getApiData() {
    let url = 'http://localhost:8000';
    return this.http.get(url);
  }

  fileupload(data: any) {
    let url = 'http://localhost:8000/profileimg';
    return this.http.post(url, data);
  }
  getuser(data: any) {
    let url = 'http://localhost:8000/userGet';
    return this.http.post(url, data);
  }

  userData = new Subject<any>()

  status = new Subject();
}
