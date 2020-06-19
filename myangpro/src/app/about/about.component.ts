import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  msgFromOther;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((d)=>{
        this.msgFromOther= d.get('msg');
    })
  }

}
