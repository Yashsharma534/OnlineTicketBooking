import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {
nameProp;
movieProp;
hallProp;
seatProp;


  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
   
  }
  liststudent()
  {
      
    this.ds.liststudent({ name:this.nameProp,movie:this.movieProp,hall:this.hallProp,seat:this.seatProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        
        alert("filled");
        this.router.navigate(['payment']);
      }
      else{
        alert("credentials are incorrect");
      }
    }) 
  }
  
}
