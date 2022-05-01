import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  adharVal = 0;
  inputLength = 0;
  errMsg = '';
  useData: any = [];
  flag = true;
  formvalue: any = {
    name: '',
    dob: '',
    state: '',
    dist: '',
    gram: '',
    phone: '',
    email: '',
  };

  constructor(private http: HttpClient) {
    console.log(this.useData.dob);
  }

  ngOnInit(): void {}

  getInputVal(e: any) {
    this.adharVal = e.target.value;
    this.inputLength = e.target.value.length;
  }
  getUserData() {
    if (this.inputLength === 12) {
      this.http
        .get(`http://localhost:8000/edit/adhar_no=${this.adharVal}`)
        .subscribe((resp) => {
          this.useData = resp;
          // this.formvalue =resp[0]
        });
      this.errMsg = '';
    } else {
      this.errMsg = 'Adhar Number miust be 12 digit';
    }
  }

  updateValue(e: any) {
    this.http.post<any>('http://localhost:8000', e).subscribe((resp) => {});
  }

  invisibleTable() {
    this.flag = false;
  }
  flagTrue() {
    this.flag = true;
  }
}
