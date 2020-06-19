import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="this is home component";
  dynamicClass = "one"

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  fun()
  {
    // alert("button is clicked");
    this.dynamicClass = "two";
  }

  gotoAbout(){
    if(this.dynamicClass=="one")
    {
      this.router.navigate(['/about'], {queryParams:{msg:"this is from home component"}});
      //navigate
    }
    else{
      alert("refresh the page try again");
    }
  }
}
