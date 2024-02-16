import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { aboutComponent } from './about/about.component';
import { concat } from 'rxjs';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full',title:'Home'},

  {path:'home',component:HomeComponent,title:'Home'},
  {path:'about',component:aboutComponent,title:'About'},
  {path:'contact',component:ContactComponent,title:'Contact'},
  {path:'portfolio',component:PortfolioComponent,title:'Portfolio'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
