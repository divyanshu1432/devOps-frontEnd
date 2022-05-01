import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../main.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  // constructor() {}

  constructor(private img: MainService, private http: HttpClient) {}

  image: any = '';
  zipCode: any;
  zipData: any;
  district: any;
  state: any;
  errmsg: any;
  adhar_no: any;
  dob: any;
  ngOnInit() {}

  getno() {}
  getfile(event: any) {
    console.log(event.target.files.length);
    const file = event.target.files[0];
    this.image = file;
  }

  getCity(event: any) {
    this.zipCode = event.target.value;

    this.zipCode.length === 6
      ? this.http
          .get(`https://api.postalpincode.in/pincode/${this.zipCode}`)
          .subscribe((data) => {
            this.zipData = data;
            this.district = this.zipData[0].PostOffice[0].District;
            this.state = this.zipData[0].PostOffice[0].State;
          })
      : (this.district = '');
    this.state = '';

    if (this.zipCode.length === 6) {
      this.adhar_no = Math.floor(Math.random() * 999999999999);
      this.adhar_no.length < 12
        ? (this.adhar_no = Math.floor(Math.random() * 999999999999))
        : '';
    } else {
      this.adhar_no = '';
    }
  }

  submitData(data: NgForm) {
    this.http.post<any>('http://localhost:8000', data).subscribe((resp) => {
      this.errmsg = resp.message;
      console.log(resp.message, 'mail message');
      resp.message == 'data saved succesfully'
        ? this.http
            .post<any>('http://localhost:8000/sendMail', data)
            .subscribe((resp) => {
              window.open('http://localhost:4200/admin', '_parent');
            })
        : console.log('no mail sent');
    });
  }

  uploadImg() {
    const formdata = new FormData();
    formdata.append('avatar', this.image);
    const x = this.http
      .post<any>('http://localhost:8000/profileimg', formdata)
      .subscribe((resp) => {
        console.log(resp);
      });
  }
}
