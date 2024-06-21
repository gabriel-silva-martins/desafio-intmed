import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  isPasswordVisible1: boolean = false;
  isPasswordVisible2: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  handleIsPasswordVisible1() {
    this.isPasswordVisible1 = !this.isPasswordVisible1;
  }

  handleIsPasswordVisible2() {
    this.isPasswordVisible2 = !this.isPasswordVisible2;
  }

  navigateToLogin() {
    this._router.navigate(['login']);
  }
}
