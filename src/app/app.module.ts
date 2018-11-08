import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FootherComponent } from './components/foother/foother.component';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { TeachersComponent } from './components/teachers/teachers.component';

import { Route, RouterModule } from '@angular/router';
// import { Route } from '@angular/compiler/src/core';
const routers: Route[] = [
  {path:'', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'proyects', component: ProyectsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'nav', component:NavComponent}  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FootherComponent,
    ProyectsComponent,
    TeachersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
