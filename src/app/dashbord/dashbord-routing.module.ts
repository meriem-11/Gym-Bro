import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { AuthGuard } from '../authguard.guard';
import { TeamMembersComponent } from './team-members/team-members.component';
import { ServicesComponent } from '../services/services.component';

const routes: Routes = [
  { path: 'teammembers', component: TeamMembersComponent , canActivate:[AuthGuard] },
  { path: 'subscribers', component: SubscribersComponent, canActivate:[AuthGuard] },
  { path: 'addservices', component: ServicesComponent, canActivate:[AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordRoutingModule { }
