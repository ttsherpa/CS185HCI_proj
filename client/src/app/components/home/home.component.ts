import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name;
  constructor(
    public authService: AuthService
  ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
    this.authService.getProfile().subscribe(profile => {
      this.name = "Welcome back " + profile.user.name; // Set username
    });
  }

    else {
      this.name = "Welcome to Blogger's World";
    }
  }


}
