import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsService } from './services/products.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MarketingComponent } from './marketing/marketing.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DbService } from './dbService/db.service';

import { HttpClientModule } from '@angular/common/http';

import { PostService } from './services/post.service';
import { DataService } from './services/data-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MarketingComponent,
    AboutComponent,
    ContentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  providers: [ProductsService, DbService, PostService, DataService],

  bootstrap: [AppComponent]
})
export class AppModule { }
