import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpServiceService } from './http-service.service';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionsComponent } from './questions/questions.component';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, BrowserAnimationsModule,MatButtonModule,MatListModule
  ],
  providers: [HttpServiceService,QuestionsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
