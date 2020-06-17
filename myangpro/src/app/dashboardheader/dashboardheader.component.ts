import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit {

  constructor(private router: Router) { }
  @Input() name;
  

  ngOnInit(): void {
  }

  logout()
  {
    localStorage.removeItem("email");
    localStorage.removeItem('name')
    this.router.navigate(['/']);
  }

}
