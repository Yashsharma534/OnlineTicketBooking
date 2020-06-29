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
allShowsList;
selectedShowsList;
AllMovies;
movieName;
balconyProp;
frontProp;
middleProp;
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {

    this.ds.getAllshow().subscribe((d)=>{
          this.allShowsList=d.data;
          console.log("all Shows")
          console.log(this.allShowsList);
      this.AllMovies=    this.allShowsList.map((s)=>{
            return s.movie;
          });
          console.log("all movies")
          console.log(this.AllMovies);

    })

  }
    show()
    {
           this.selectedShowsList= this.allShowsList.filter((s)=>{
             return s.movie == this.movieName;
           })
           console.log("after filter");
           console.log(this.selectedShowsList)
    }
    bookThisShow(show)
    {
      alert("in book show" + show._id);
      this.ds.bookThisShow({id:show._id,front:this.frontProp,middle:this.middleProp,balcony:this.balconyProp})
      .subscribe((response)=>{
        alert(JSON.stringify(response))
        if(response.status=="ok")
        {
              alert("show booked");

             var am = this.frontProp*show.frontprize + this.middleProp*show.middleprize+this.balconyProp*show.balconyprize;
              this.router.navigate(['/payment'], {queryParams:{total:am}});
        }
    })
  }
 }