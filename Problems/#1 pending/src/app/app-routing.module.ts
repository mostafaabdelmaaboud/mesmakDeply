import { NgModule, Component } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { MarketingComponent } from './marketing/marketing.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';

import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path: '', component: MarketingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'content', component: ContentComponent},
  
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
