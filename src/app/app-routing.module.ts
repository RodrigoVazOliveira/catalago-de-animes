import { AboutComponent } from './view/about/about.component';
import { ListComponent } from './view/list/list.component';
import { CategoryComponent } from './view/category/category.component';
import { HomeComponent } from './view/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '/', component: HomeComponent},
  { path: '/category', component: CategoryComponent },
  { path: '/list', component: ListComponent},
  { path: '/about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
