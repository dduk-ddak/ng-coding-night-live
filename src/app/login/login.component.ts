import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  google_logo_src = '/assets/image/google_normal.png';

  ngOnInit() {
  }
  
  myfocus() {
    this.google_logo_src = '/assets/image/google_focus.png';
  }

  unfocus() {
    this.google_logo_src = '/assets/image/google_normal.png';
  }

  press() {
    this.google_logo_src = '/assets/image/google_pressed.png';
  }
}
