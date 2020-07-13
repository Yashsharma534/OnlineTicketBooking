import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  total;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
this.total = d.get('total');
    })
  }
payment()
{
  alert("payment done successfully");
}
logout()
{
  this.router.navigate(['/']);
}
}
