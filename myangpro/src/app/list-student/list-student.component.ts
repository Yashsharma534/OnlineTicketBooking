import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
movieProp;
hallProp;
aProp;
bProp;
cProp;
dateProp;
timeProp;

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
   
  }
  liststudent()
  {
      
    this.ds.liststudent({movie:this.movieProp,hall:this.hallProp,front:{total:40,booked:0},middle:{total:40,booked:0},balcony:{total:40,booked:0},date:this.dateProp,time:this.timeProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        
      
        alert("show at hall");
      }
      else{
        alert("credentials are incorrect");
      }
    }) 
  }
  
}
