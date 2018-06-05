import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {
  currentuser;
  users;
  myblogsdata;
  constructor(private authService: AuthService, private blogService: BlogService) { 
    
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.currentuser = profile.user.username; // Set username
    });

    this.authService.getData().subscribe(users => {
      this.users = users.length;
      console.log(users);
    });

    this.blogService.getAllBlogs().subscribe(data => {
      const bl = data.blogs
      // const result = bl.filter(blog => blog.createdBy == this.currentuser);
      console.log(bl);
      
    });
  }

}
