import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-userbooking',
  templateUrl: './userbooking.component.html',
  styleUrls: ['./userbooking.component.css']
})
export class UserbookingComponent implements OnInit {
dateProp;
timeProp;
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
 show()
 {
  this.ds.show({ date:this.dateProp,time:this.timeProp})
  .subscribe((response)=>{
    if(response.status=="ok")
    {
      
      
      this.router.navigate(['/payment']);
      
 }
 else{
   alert("filled the date and time");
 }

})
 }
 }