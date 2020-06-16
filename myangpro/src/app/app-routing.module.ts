import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { TestimoinalComponent } from './testimoinal/testimoinal.component';
import { BannerComponent } from './banner/banner.component';
import { GalleryComponent } from './gallery/gallery.component';
import { EventComponent } from './event/event.component';
import { CelebrationComponent } from './celebration/celebration.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'services',component:ServicesComponent},
    {path:'gallery',component:GalleryComponent,children:[{path:'event',component:EventComponent},{path:'celebration',component:CelebrationComponent}]}
    /*{path:'testimoinal',component:TestimoinalComponent,outlet:'helper2'},
    {path:'banner',component:BannerComponent,outlet:'helper'}*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
