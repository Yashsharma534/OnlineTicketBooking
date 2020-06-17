import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customcard',
  templateUrl: './customcard.component.html',
  styleUrls: ['./customcard.component.css']
})
export class CustomcardComponent implements OnInit {

  @Input() title;
  @Input() info;
  constructor() { }

  ngOnInit(): void {
  }

}
