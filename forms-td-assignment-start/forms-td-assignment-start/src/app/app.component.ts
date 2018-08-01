import { Component, ViewChild } from '@angular/core';
import { NgForm } from '../../node_modules/@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultSub = 'Advanced';
  submitted = false;
  data = {
    email: '',
    subscription: '',
    password: ''
  }

  onSubmit() {
    this.submitted = true;
    this.data.email = this.signupForm.value.email;
    this.data.subscription = this.signupForm.value.subs;
    this.data.password = this.signupForm.value.password;

    this.signupForm.reset();
  }

}
