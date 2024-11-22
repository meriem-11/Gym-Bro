import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { AddserviceComponent } from './addservice/addservice.component';
import { AuthGuard } from '../authguard.guard';
import { TeamMembersComponent } from './team-members/team-members.component';

const routes: Routes = [
  { path: 'teammembers', component: TeamMembersComponent , canActivate:[AuthGuard] },
  { path: 'subscribers', component: SubscribersComponent, canActivate:[AuthGuard] },
  { path: 'addservices', component: AddserviceComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
