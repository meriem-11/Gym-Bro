import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PricesComponent } from './prices/prices.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { AuthGuard } from './authguard.guard';
import { JoinComponent } from './join/join.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { ChatComponent } from './chat/chat.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'team', component: TeamComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'prices', component: PricesComponent },
  {path: 'schedule',component: ScheduleComponent},
  { path: 'join', component: JoinComponent},
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'dashboard', component: DashbordComponent  ,canActivate:[AuthGuard],
     loadChildren: () => import('./dashbord/dashbord.module').then((m)=>m.DashbordModule)
  },
  { path: '', redirectTo:'/home',pathMatch:'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
