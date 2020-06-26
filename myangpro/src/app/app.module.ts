import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { DashboardsidebarComponent } from './dashboardsidebar/dashboardsidebar.component';
import { NewStudentComponent } from './new-student/new-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { PrefixPipe } from './prefix.pipe';
import { PercentPipe } from './percent.pipe';
import { PostComponent } from './post/post.component';
import { CustomcardComponent } from './customcard/customcard.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PaymentComponent } from './payment/payment.component';
import { UserbookingComponent } from './userbooking/userbooking.component';



@NgModule({
  declarations: [
    AppComponent,
    WebsiteComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    DashboardheaderComponent,
    DashboardsidebarComponent,
    NewStudentComponent,
    ListStudentComponent,
    LoginComponent,
    ProductsComponent,
    PrefixPipe,
    PercentPipe,
    PostComponent,
    CustomcardComponent,
    SignUpComponent,
    PaymentComponent,
    UserbookingComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
