import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title="this is home component";
  dynamicClass = "one"
  slideIndex = 1;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  fun()
  {
    // alert("button is clicked");
    this.dynamicClass = "two";
  }

  gotoAbout(){
    if(this.dynamicClass=="one")
    {
      this.router.navigate(['/about'], {queryParams:{msg:"this is from home component"}});
      //navigate
    }
    else{
      alert("refresh the page try again");
    }
  }


  ngAfterViewInit()
  {
    this.showSlides(this.slideIndex);
  }


  
 plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

 currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}

 showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {this.slideIndex = 1}
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    var tSlide:any = slides[i];
    tSlide.style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  var tepSlide:any= slides[this.slideIndex-1]
  tepSlide.style.display = "block";
  dots[this.slideIndex-1].className += " active";

  var ctext:any = dots[this.slideIndex-1];

  captionText.innerHTML = ctext.alt;
}



}

