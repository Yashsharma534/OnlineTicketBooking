import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailProp;
  passwordProp;
  constructor( private router:Router, private ds:DataService ) { }

  ngOnInit(): void {

    if(localStorage.getItem('email'))
      this.router.navigate(['/dashboard']);
  }

  login()
  {
      
    this.ds.signIn({ email:this.emailProp, password:this.passwordProp})
    .subscribe((response)=>{
      if(response.status=="ok")
      {
        
        localStorage.setItem('name', response.data[0].name);          
        localStorage.setItem('email', response.data[0].email);
        localStorage.setItem('password', response.data[0].password);
        if( response.data[0].role=='admin')
        {
        this.router.navigate(['/dashboard']);
        }
        else{

          this.router.navigate(['/userbooking']);

        }
      }
      else{
        alert("credentials are incorrect");
      }
    })
  }

}
