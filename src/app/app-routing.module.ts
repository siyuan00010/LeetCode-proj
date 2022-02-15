import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PremiumComponent } from './Premium/premium.component';
import { SigninComponent } from './signin/signin.component';
import { ProblemSetComponent } from './problemSet/problemSet.component';

const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'premium', component: PremiumComponent},
  { path: 'problemSet', component: ProblemSetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
