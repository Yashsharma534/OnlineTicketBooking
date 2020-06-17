import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  nameProp;
  mobileProp;
  emailProp;
  passwordProp;
  roleProp;
  constructor(private ds:DataService, private router:Router) { }

  ngOnInit(): void {
  }

  signUp()
  {
      this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp, mobile:this.mobileProp,role:this.roleProp})
      .subscribe((response)=>{
        if(response.status=="ok")
        {
          
       

          alert('registration successfull you will be redirected to login');
          this.router.navigate(['/login']);


        }
        else
        {
          alert("could not register");
        }
      })
  }

}
