import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProducts;
  posts;
  total= 20000;
  constructor(private d :DataService) { }

  ngOnInit(): void {
    // this.allProducts = [
    //   {
    //     title:"A Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"B Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"C Product",
    //     price:45,
    //     available:56
    //   },
    //   {
    //     title:"D Product",
    //     price:45,
    //     available:56
    //   }
    // ]


    this.d.getPosts().subscribe((d)=>{
      this.posts = d;
    })




  }

}
