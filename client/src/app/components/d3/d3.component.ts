import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { BlogService } from '../../services/blog.service';

import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as moment from 'moment';

@Component({
  selector: 'app-d3',
  templateUrl: './d3.component.html',
  styleUrls: ['./d3.component.css']
})
export class D3Component implements OnInit {
  currentuser;
  userslen;
  myblogsdata;
  stats;
  greatestusers;

  //d3js
  title: string = 'D3.js with Angular 2!';
  subtitle: string = 'Pie Chart';

  private margin = {top: 20, right: 20, bottom: 30, left: 50};
  private width: number;
  private height: number;
  private radius: number;

  private arc: any;
  private labelArc: any;
  private pie: any;
  private color: any;
  private svg: any;


  //
  constructor(private authService: AuthService, private blogService: BlogService) { 
    this.width = 300;
    this.height = 300;
    this.radius = Math.min(this.width, this.height) / 2;
  }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.currentuser = profile.user.username; // Set username
      this.getmyblogs(this.currentuser);
    });

    this.authService.getData().subscribe(users => {
      this.userslen = users.length;
      this.stats = this.collectStats(users);
      this.initSvg();
      this.drawPie();
    });

  }

  getmyblogs(user){
    this.blogService.getAllBlogs().subscribe(data => {
      this.myblogsdata = data.blogs;
      this.myblogsdata.filter(blog => blog.createdBy == user);
    });
  }

  collectStats(users){
    let stats = [
      {age: "10-20", population: 0},
      {age: "21-30", population: 0},
      {age: "31-40", population: 0},
      {age: "41-50", population: 0},
      {age: "51-60", population: 0}
    ];

    for(var i = 0; i<users.length; i++){
      let age = parseInt(moment(users[i].bday).fromNow());
      if( age > 9 && age < 21 ){
        stats[0].population++;
      }
      if( age > 20  && age < 31 ){
        stats[1].population++;
      }
      if( age > 30 && age < 41 ){
        stats[2].population++;        
      }
      if( age > 40 && age < 51 ){
        stats[3].population++;
      }
      if( age > 50 && age < 61 ){
        stats[4].population++;        
      }
    }

    return stats;
  }




  private initSvg() {
    this.color = d3Scale.scaleOrdinal()
                        .range(["#98abc5", "#8a89a6", "#a05d56", "#d0743c", "#ff8c00"]);
    this.arc = d3Shape.arc()
                      .outerRadius(this.radius - 10)
                      .innerRadius(0);
    this.labelArc = d3Shape.arc()
                           .outerRadius(this.radius - 60)
                           .innerRadius(this.radius - 60);
    this.pie = d3Shape.pie()
                      .sort(null)
                      .value((d: any) => d.population);
    this.svg = d3.select("svg")
                 .append("g")
                 .attr("transform", "translate(" + this.width / 2 + "," + this.height / 2 + ")");
  }


  private drawPie() {
    let g = this.svg.selectAll(".arc")
                    .data(this.pie(this.stats))
                    .enter().append("g")
                    .attr("class", "arc");
    g.append("path").attr("d", this.arc)
                    .style("fill", (d: any) => this.color(d.data.age) );
    g.append("text").attr("transform", (d: any) => "translate(" + this.labelArc.centroid(d) + ")")
                    .attr("dy", ".25em")
                    .text((d: any) => d.data.age);
  }

}
