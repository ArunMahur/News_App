import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { NewsApiService } from './news-api.service';
import { MatListModule } from '@angular/material/list';
import { ApixuService } from "./apixu.service";
import {  MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';

import { AppRoutingModule,RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LogInComponent } from './Auth/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './Auth/signup/signup.component';
import { FooterComponent } from './Auth/footer/footer.component';
import { FormsService } from './forms.service';
import { DashboardComponent } from './UserInterface/dashboard/dashboard.component';
import { ArticleComponent } from './UserInterface/article/article.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './UserInterface/home/home.component';
import { SportsComponent } from './UserInterface/sports/sports.component';
import { WheatherComponent } from './UserInterface/wheather/wheather.component';
import { SavedNewsComponent } from './UserInterface/saved-news/saved-news.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LogInComponent,
    SignupComponent,
    FooterComponent,
    DashboardComponent,
    RoutingComponents,
    ArticleComponent,
    HomeComponent,
    SportsComponent,
    WheatherComponent,
    SavedNewsComponent
  ],
  imports: [
    MatTabsModule,
    MatIconModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    HttpClientJsonpModule,
    MatListModule,
    FlexLayoutModule
  ],
  providers: [ FormsService ,  NewsApiService, ApixuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
