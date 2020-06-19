import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() id;
  @Input() title;
  @Input() body;
  constructor() { }

  ngOnInit(): void {
  }

}
