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

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }
  liststudent()
  {
      
    this.ds.liststudent({ name:this.nameProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        
        localStorage.setItem('name', response.data[0].name);          
        localStorage.setItem('movie', response.data[0].movie); 

      }
      else{
        alert("credentials are incorrect");
      }
    })
  }
}
