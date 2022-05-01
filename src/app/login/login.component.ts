import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { format } from 'path';
import { Router } from '@angular/router';
// import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { MainService } from '../main.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  status: boolean = false;
  users: boolean = false;
  admin: boolean = false;
  constructor(private user: MainService, private router: Router) {}
  ngOnInit() {
    if (window.location.href != 'http://localhost:42300/') {
      this.status = true;
    }
  }

  userSubmit(data: NgForm) {
    this.user.getuser(data).subscribe((datas) => {
      if (datas) {
        this.user.userData.next(datas);
        this.router.navigate(['/user']),
          (this.users = true),
          (this.userData = datas);
      }
      console.log(this.userData);
    });
  }

  userData: any = {};
  apiData: any = [];

  getData(data: NgForm) {
    this.user.getApiData().subscribe((datas) => {
      this.apiData = datas;
      this.userData = data;
      this.apiData[0].adminId === this.userData.adminId &&
      this.apiData[0].password === this.userData.password
        ? ((this.status = true),
          this.router.navigate(['/admin']),
          (this.admin = true),
          localStorage.setItem('status', 'true'))
        : ((this.status = false), this.router.navigate(['']));
    });
  }
}
