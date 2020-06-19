import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboardsidebar',
  templateUrl: './dashboardsidebar.component.html',
  styleUrls: ['./dashboardsidebar.component.css']
})
export class DashboardsidebarComponent implements OnInit {

  isTeacher=false;
  constructor() { }

  ngOnInit(): void {
   this.isTeacher= (localStorage.getItem('role')=="Teacher")?true:false;
  }

}
