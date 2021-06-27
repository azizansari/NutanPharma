import { Component } from "@angular/core";
import { navItems } from "../../_nav";
import { Router } from '@angular/router';

@Component({
  selector: "app-dashboard",
  templateUrl: "./default-layout.component.html",
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems = navItems;
  constructor(private router: Router) {
    setTimeout(() => {
      document.getElementsByClassName("navbar-brand-full")[0].remove();
      document
        .getElementsByClassName("d-md-block d-none navbar-toggler")[0]
        .remove();
    }, 500);
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logOut(){
    this.router.navigate([""]);

  }
}
