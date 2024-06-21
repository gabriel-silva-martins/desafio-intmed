import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isPasswordVisible: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  handleIsPasswordVisible() {
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  navigateToCreateAccount() {
    this._router.navigate(['criar-conta']);
  }
}
