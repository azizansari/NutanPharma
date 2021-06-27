import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  isPassword = "123";
  isUsername = "test";

  loginForm = new FormGroup({
    username: new FormControl(""),
    password: new FormControl(""),
  });
  constructor(private router: Router) {}
  ngOnInit() {
    console.log(this.loginForm.value);
  }

  isAuth() {
    if (
      this.loginForm.value.username === this.isUsername &&
      this.loginForm.value.password === this.isPassword
    ) {
      console.log("auth success");
      this.router.navigate(["dashboard"]);
    } else {
      console.log("auth failure");
    }
  }
}
