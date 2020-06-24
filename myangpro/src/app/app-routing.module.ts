import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website/website.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthGuard } from './auth.guard';
import { PaymentComponent } from './payment/payment.component';



const routes: Routes = [
  {path:'', component:WebsiteComponent, children:[
                                                      {
                                                        path:'', component:HomeComponent
                                                      },
                                                      {
                                                        path:'about', component:AboutComponent
                                                      },
                                                      {
                                                        path:'contact', component:ContactComponent
                                                      },
                                                      {
                                                        path:'login', component:LoginComponent
                                                      },
                                                      
                                                      {
                                                        path:'signup', component:SignUpComponent
                                                      },
                                                      {
                                                        path:'products', component:ProductsComponent
                                                      } 

                                                      

                                              ]},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]   ,children:[
                                                      {path:'', component:ListStudentComponent},
                                                      {path:'liststudent', component:ListStudentComponent},
                                                      {path:'newstudent', component:NewStudentComponent}
                                              ]},
                                              {path:'payment', component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
