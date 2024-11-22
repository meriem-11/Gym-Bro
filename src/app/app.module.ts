import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './authguard.guard';
import { NavComponent } from './dashbord/nav/nav.component';
import { SubscribersComponent } from './dashbord/subscribers/subscribers.component';
import { TeamMembersComponent } from './dashbord/team-members/team-members.component';
import { AddserviceComponent } from './dashbord/addservice/addservice.component';
import { HttpClientModule } from '@angular/common/http';
import { DashbordModule } from './dashbord/dashbord.module';
import { EmailJSResponseStatus } from 'emailjs-com';
import { JoinComponent } from './join/join.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    TeamComponent,
    ContactComponent,
    ServicesComponent,
    PricesComponent,
    AdminloginComponent,
    DashbordComponent,
    NavComponent,
    SubscribersComponent,
    TeamMembersComponent,
    AddserviceComponent,
    JoinComponent,
    ScheduleComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DashbordModule,
    ReactiveFormsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
