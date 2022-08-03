import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { RegisterComponent } from './components/home/modal/register/register.component';
import { LoginComponent } from './components/home/modal/login/login.component';
import { ModalComponent } from './components/home/modal/modal.component';
import { IndexComponent } from './components/home/modal/index/index.component';
import { HomeHabitListComponent } from './components/home/home-habit-list/home-habit-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { APIConnecterService } from './services/apiconnecter.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from "./services/token-interceptor.service";
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CreateHabitComponent } from './components/create-habit/create-habit.component';
import { BrowseHabitsComponent } from './components/browse-habits/browse-habits.component';
import { HabitSubscribeComponent } from './components/habit-subscribe/habit-subscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    IndexComponent,
    RegisterComponent,
    LoginComponent,
    HomeHabitListComponent,
    DashboardComponent,
    HomeComponent,
    NavbarComponent,
    CreateHabitComponent,
    BrowseHabitsComponent,
    HabitSubscribeComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [APIConnecterService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
