import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Auth/register/register.component';
import { LogInComponent } from './Auth/log-in/log-in.component';
import { DashboardComponent } from './UserInterface/dashboard/dashboard.component';
import { SignupComponent } from './Auth/signup/signup.component';
import { ArticleComponent } from './UserInterface/article/article.component';
import { HomeComponent } from './UserInterface/home/home.component';
import { SportsComponent } from './UserInterface/sports/sports.component';
import { WheatherComponent } from './UserInterface/wheather/wheather.component'

const routes: Routes = [
  { path : '' , component : DashboardComponent },
  { path : 'signup' , component :  SignupComponent },
  { path : 'register' , component : RegisterComponent },
  { path : 'login' , component : LogInComponent },
  { path : 'dashboard' , component: DashboardComponent},
  { path : 'article', component: ArticleComponent},
  { path : 'home', component: HomeComponent},
  { path : 'sports', component: SportsComponent},
  { path : 'wheather', component: WheatherComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [ WheatherComponent,SportsComponent,HomeComponent,SignupComponent,RegisterComponent,LogInComponent,DashboardComponent,ArticleComponent ]
