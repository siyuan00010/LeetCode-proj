import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumComponent } from './Premium/premium.component';
import { SigninComponent } from './Signin/signin.component';
import { ProblemSetComponent } from './problemSet/problemSet.component';
import { BusinessComponent } from './business/business.component';
import { getStartedComponent } from './body/getStarted.component';
import { jobsComponent } from './jobs/jobs.component';
const routes: Routes = [
  { path: 'subscribe', component: PremiumComponent },
  { path: 'account/signin', component: SigninComponent },
  { path: 'explore', component:getStartedComponent},
  { path: 'problemSet', component: ProblemSetComponent },
  { path: 'business/contact', component: BusinessComponent },
  { path: 'jobs', component:jobsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
export class Route{
  Routes: any;
}
