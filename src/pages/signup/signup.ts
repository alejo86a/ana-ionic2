import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, Nav } from 'ionic-angular';
import { HomePage } from "../home/home";
import { User } from "../../providers/user";


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  @ViewChild(Nav) nav: Nav;
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public user: User) {

  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account);      
    this.nav.setRoot(HomePage);
    let toast = this.toastCtrl.create({
      message: this.signupErrorString,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
}
